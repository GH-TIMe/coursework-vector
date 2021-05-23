import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";

import { CustomTooltip } from "../components";

import {
  getPurchases,
  savePurchase,
  setPurchaseLoaded,
} from "../redux/actions/purchase";
import { setStep } from "../redux/actions/steps";

import { PurchaseData, MatchProps, SavePurchasePayloadTypes } from "../types";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Toolbar,
  TextField,
} from "@material-ui/core";

import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Clear as ClearIcon,
  Done as DoneIcon,
  Functions as FunctionsIcon,
} from "@material-ui/icons";

import { useStyles } from "../styles";
import axios from "axios";
import { API_HOST, API_PATH } from "../config";
import { useAppSelector } from "../redux/store";
import Loader from "../components/Loader";

type ColumnsTypes = {
  id: keyof PurchaseData;
  label: string;
  align?: "right";
};

const columns: ColumnsTypes[] = [
  { id: "name", label: "Наименование" },
  { id: "amount", label: "Закупка, т" },
  { id: "price", label: "Цена, руб/кг" },
];

const Purchases = ({ match }: MatchProps) => {
  const classes = useStyles();

  // load purchases
  const dispatch = useDispatch();
  const { id: model, id2: scheme, changed } = match.params;

  const {
    purchase: rows,
    request,
    loaded,
  } = useAppSelector((state) => state.purchase);

  useEffect(() => {
    dispatch(setPurchaseLoaded(false));
    dispatch(setStep(changed !== "0" ? 6 : 2));
    dispatch(getPurchases(model, scheme, changed));
  }, [dispatch, model, scheme, changed]);

  // edit rows

  interface EditRowTypes {
    [id: number]: string;
  }

  const [editRow, setEditRow] = useState<EditRowTypes>({});

  const handleClickEditRow = (id: number, value: string) => {
    setEditRow({
      ...editRow,
      [id]: value,
    });
  };

  const handleChangeEditField = ({ value }: any, id: number) => {
    setEditRow({
      ...editRow,
      [id]: value,
    });
  };

  const handleClickCancel = (id: number) => {
    const newRows = { ...editRow };
    delete newRows[id];
    setEditRow(newRows);
  };

  const handleClickSave = (id: number, index: number) => {
    const obj: SavePurchasePayloadTypes = {
      index,
      price: +editRow[id],
    };
    dispatch(savePurchase(obj));
    handleClickCancel(id);
  };

  const PurchaceToolbar = () => {
    const classes = useStyles();

    const history = useHistory();

    const handleClickCalculate = () => {
      axios({
        method: "post",
        url: `${API_HOST}/${API_PATH}/${model}/schemes/${scheme}/purchase/${changed}/`,
        data: request,
        headers: { "Content-Type": "multipart/form-data" },
      });
    };

    const handleClickRefuse = () => {
      const URL =
        changed !== "0"
          ? `/${model}/schemes/${scheme}/wishes`
          : `/${model}/wishes`;
      history.push(URL);
    };

    const handleClickAccept = () => {
      history.push(
        `/${model}/schemes/${scheme}/production${changed !== "0" ? "/1" : "/0"}`
      );
    };

    return (
      <Toolbar className={classes.toolBar}>
        <div className="left-side">
          <CustomTooltip title="Отказаться">
            <IconButton
              color="secondary"
              aria-label="refuse"
              onClick={handleClickRefuse}
            >
              <ClearIcon />
            </IconButton>
          </CustomTooltip>
        </div>
        <Typography variant="h6" component="h2">
          Корректировка плана закупок
        </Typography>
        <div className="right-side">
          <CustomTooltip title="Рассчитать линейно">
            <IconButton
              color="secondary"
              aria-label="calculate"
              onClick={handleClickCalculate}
            >
              <FunctionsIcon />
            </IconButton>
          </CustomTooltip>
          <CustomTooltip title="Принять">
            <IconButton
              color="primary"
              aria-label="accept"
              onClick={handleClickAccept}
            >
              <DoneIcon />
            </IconButton>
          </CustomTooltip>
        </div>
      </Toolbar>
    );
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <PurchaceToolbar />
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow className={classes.header}>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
              <TableCell align="center">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loaded ? (
              <Loader content={4} repeat={10} />
            ) : (
              <>
                {rows.map(({ id, name, amount, price }, index) => {
                  return (
                    <TableRow key={id}>
                      <TableCell>{name}</TableCell>
                      <TableCell>{amount}</TableCell>
                      {editRow.hasOwnProperty(id) ? (
                        <TableCell>
                          <NumberFormat
                            value={editRow[id]}
                            thousandSeparator={" "}
                            customInput={TextField}
                            suffix={"\u20BD"}
                            InputProps={{
                              color: "secondary",
                              size: "small",
                              className: classes.input,
                            }}
                            onValueChange={({ value: v }) =>
                              handleChangeEditField({ value: v }, id)
                            }
                          />
                        </TableCell>
                      ) : (
                        <TableCell>{price}</TableCell>
                      )}
                      {editRow.hasOwnProperty(id) ? (
                        <TableCell align="center">
                          <IconButton
                            size="small"
                            color="secondary"
                            onClick={() => handleClickSave(id, index)}
                          >
                            <SaveIcon />
                          </IconButton>
                          <IconButton
                            size="small"
                            color="secondary"
                            onClick={() => handleClickCancel(id)}
                          >
                            <CancelIcon />
                          </IconButton>
                        </TableCell>
                      ) : (
                        <TableCell align="center">
                          <IconButton
                            size="small"
                            color="secondary"
                            onClick={() => handleClickEditRow(id, "" + price)}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Purchases;
