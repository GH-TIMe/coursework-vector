import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import { MatchProps, SaveWishesPayloadTypes, WishesItemTypes } from "../types";

import {
  getWishes,
  setWishesStatus,
  saveWishes,
  clearWishesRequest,
  expandAllWishes,
  closeAllWishes,
  setWishesLoaded,
} from "../redux/actions/wishes";
import { setStep } from "../redux/actions/steps";
import { CustomTooltip } from "../components";

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import RedoIcon from "@material-ui/icons/Redo";
import FunctionsIcon from "@material-ui/icons/Functions";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

import { useStyles } from "../styles";

import axios from "axios";
import { API_HOST, API_PATH } from "../config";
import { useAppSelector } from "../redux/store";
import Loader from "../components/Loader";

const Wishes = ({ match }: MatchProps) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const id = +match.params.id;

  useEffect(() => {
    dispatch(clearWishesRequest);
    dispatch(setStep(1));
    dispatch(setWishesLoaded(false));
    dispatch(getWishes(id));
  }, [dispatch, id]);

  const {
    wishes: rows,
    status,
    scheme,
    request,
    isOpen,
    loaded,
  } = useAppSelector((state) => state.wishes);

  const handleClick = (...args: string[]) => {
    dispatch(setWishesStatus(args));
  };

  interface EditRowTypes {
    [id: number]: {
      0: string;
      1: string;
    };
  }

  const [editRow, setEditRow] = useState<EditRowTypes>({});

  const handleClickEditTable = (id: number, value1: string, value2: string) => {
    setEditRow({
      ...editRow,
      [id]: { 0: value1, 1: value2 },
    });
  };

  const handleChangeEditField = ({ value }: any, id: number, index: number) => {
    setEditRow({
      ...editRow,
      [id]: {
        ...editRow[id],
        [index]: value,
      },
    });
  };

  const handleClickCancel = (id: number) => {
    const newRows = { ...editRow };
    delete newRows[id];
    setEditRow(newRows);
  };

  const handleClickSave = (
    id: number,
    key1: string,
    key2: string,
    index: number
  ) => {
    const amount: string = editRow[id][0];
    const price: string = editRow[id][1];
    const obj: SaveWishesPayloadTypes = {
      id,
      key1,
      key2,
      amount,
      price,
      index,
    };
    dispatch(saveWishes(obj));
    handleClickCancel(id);
  };

  const history = useHistory();

  const handleClickBack = () => {
    history.push("/");
  };

  const handleClickSkip = () => {
    history.push(`/${id}/schemes/${scheme}/purchase/0`);
  };

  const handleExpandAll = () => {
    if (!isOpen) {
      dispatch(expandAllWishes);
    } else {
      dispatch(closeAllWishes);
    }
  };

  const handleClickCalculate = () => {
    axios({
      method: "post",
      url: `${API_HOST}/${API_PATH}/${id}/wishes/`,
      data: request,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      const schemeID: number = res.data["scheme_id"];
      history.push(`/${id}/schemes/${schemeID}/purchase/0`);
    });
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Toolbar className={classes.toolBar}>
          <div className="left-side">
            <CustomTooltip title="Модели">
              <IconButton
                color="secondary"
                aria-label="back"
                onClick={handleClickBack}
              >
                <KeyboardBackspaceIcon />
              </IconButton>
            </CustomTooltip>
          </div>
          <Typography variant="h6" component="h2">
            Ввод плана продаж готовой продукции
          </Typography>
          <div className="right-side">
            <CustomTooltip title="Продолжить без сохранения">
              <IconButton
                color="secondary"
                aria-label="not save"
                onClick={handleClickSkip}
              >
                <RedoIcon />
              </IconButton>
            </CustomTooltip>
            <CustomTooltip title="Рассчитать линейно">
              <IconButton
                color="secondary"
                aria-label="calculate"
                onClick={handleClickCalculate}
              >
                <FunctionsIcon />
              </IconButton>
            </CustomTooltip>
          </div>
        </Toolbar>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow className={classes.header}>
              <TableCell>
                <CustomTooltip
                  title={!isOpen ? "Раскрыть список" : "Скрыть список"}
                >
                  <IconButton
                    color="secondary"
                    aria-label="expand all"
                    onClick={handleExpandAll}
                    size="small"
                  >
                    {isOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </CustomTooltip>
              </TableCell>
              <TableCell className={classes.emptyCell}></TableCell>
              <TableCell>№</TableCell>
              <TableCell>Наименование позиции</TableCell>
              <TableCell style={{ minWidth: 150 }}>Объем, т</TableCell>
              <TableCell style={{ minWidth: 150 }}>
                Цена реализации, руб/кг
              </TableCell>
              <TableCell align="center">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loaded ? (
              <Loader empty={2} content={5} repeat={10} />
            ) : (
              <>
                {Object.keys(rows).map((key1) => {
                  return (
                    <React.Fragment key={key1}>
                      <TableRow>
                        <TableCell
                          style={{
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                          colSpan={4}
                          onClick={() => handleClick(key1)}
                        >
                          <IconButton
                            style={{ marginRight: 16 }}
                            color="secondary"
                            size="small"
                          >
                            {status[key1].status ? (
                              <ExpandMoreIcon />
                            ) : (
                              <ChevronRightIcon />
                            )}
                          </IconButton>
                          <span>
                            Код: <span style={{ fontWeight: 400 }}>{key1}</span>
                          </span>
                        </TableCell>
                        <TableCell style={{ fontWeight: 700 }} align="left">
                          {+rows[key1].amount.toFixed(8)}
                        </TableCell>
                        <TableCell style={{ fontWeight: 700 }} align="left">
                          {+rows[key1].averagePrice.toFixed(8)}
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      {status[key1].status &&
                        Object.keys(rows[key1].values).map((key2) => (
                          <React.Fragment key={key2}>
                            <TableRow>
                              <TableCell />
                              <TableCell
                                colSpan={3}
                                style={{
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                }}
                                onClick={() => handleClick(key1, key2)}
                              >
                                <IconButton
                                  size="small"
                                  color="secondary"
                                  style={{ marginRight: 16 }}
                                >
                                  {status[key1][key2].status ? (
                                    <ExpandMoreIcon />
                                  ) : (
                                    <ChevronRightIcon />
                                  )}
                                </IconButton>
                                <span>
                                  Код:{" "}
                                  <span style={{ fontWeight: 400 }}>
                                    {key2}
                                  </span>
                                </span>
                              </TableCell>
                              <TableCell align="left">
                                {+rows[key1].values[key2].amount.toFixed(8)}
                              </TableCell>
                              <TableCell align="left">
                                {
                                  +rows[key1].values[key2].averagePrice.toFixed(
                                    8
                                  )
                                }
                              </TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                            {status[key1][key2].status &&
                              rows[key1].values[key2].values.map(
                                (row: WishesItemTypes, index: number) => {
                                  return (
                                    <TableRow key={`${key2}_${index}`}>
                                      <TableCell></TableCell>
                                      <TableCell></TableCell>
                                      <TableCell>{row.code}</TableCell>
                                      <TableCell>{row.name}</TableCell>
                                      {editRow.hasOwnProperty(row.id) ? (
                                        <>
                                          <TableCell>
                                            <NumberFormat
                                              value={editRow[row.id][0]}
                                              onValueChange={({ value: v }) =>
                                                handleChangeEditField(
                                                  { value: v },
                                                  row.id,
                                                  0
                                                )
                                              }
                                              thousandSeparator={" "}
                                              customInput={TextField}
                                              InputProps={{
                                                color: "secondary",
                                                size: "small",
                                                className: classes.input,
                                              }}
                                            />
                                          </TableCell>
                                          <TableCell>
                                            <NumberFormat
                                              value={editRow[row.id][1]}
                                              onValueChange={({ value: v }) =>
                                                handleChangeEditField(
                                                  { value: v },
                                                  row.id,
                                                  1
                                                )
                                              }
                                              thousandSeparator={" "}
                                              suffix={"\u20BD"}
                                              customInput={TextField}
                                              InputProps={{
                                                color: "secondary",
                                                size: "small",
                                                className: classes.input,
                                              }}
                                            />
                                          </TableCell>
                                        </>
                                      ) : (
                                        <>
                                          <TableCell
                                            style={{
                                              color: "rgba(0, 0, 0, 0.5)",
                                            }}
                                          >
                                            {+row.amount}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              color: "rgba(0, 0, 0, 0.5)",
                                            }}
                                          >
                                            {row.price}
                                          </TableCell>
                                        </>
                                      )}
                                      {!editRow.hasOwnProperty(row.id) ? (
                                        <TableCell align="center">
                                          <IconButton
                                            onClick={() =>
                                              handleClickEditTable(
                                                row.id,
                                                row.amount,
                                                "" + row.price
                                              )
                                            }
                                            size="small"
                                            color="secondary"
                                          >
                                            <EditIcon />
                                          </IconButton>
                                        </TableCell>
                                      ) : (
                                        <TableCell align="center">
                                          <IconButton
                                            onClick={() =>
                                              handleClickSave(
                                                row.id,
                                                key1,
                                                key2,
                                                index
                                              )
                                            }
                                            size="small"
                                            color="secondary"
                                          >
                                            <SaveIcon />
                                          </IconButton>
                                          <IconButton
                                            onClick={() =>
                                              handleClickCancel(row.id)
                                            }
                                            size="small"
                                            color="secondary"
                                          >
                                            <CancelIcon />
                                          </IconButton>
                                        </TableCell>
                                      )}
                                    </TableRow>
                                  );
                                }
                              )}
                          </React.Fragment>
                        ))}
                    </React.Fragment>
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

export default Wishes;
