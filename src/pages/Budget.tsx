import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBlocksSell, getBlocksAdd } from "../redux/actions/budget";
import { setStep } from "../redux/actions/steps";

import {
  BlocksData,
  MatchProps,
  ProductsData,
  PurchaseData,
  WishesItemTypes,
  WishesStateTypes,
  WishesTypes,
} from "../types";

import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";

import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";

import { useStyles } from "../styles";

type ColumnsWishesTypes = {
  id: keyof BlocksData;
  label: string;
  align?: "right";
};

const columnsWishes: ColumnsWishesTypes[] = [
  { id: "code", label: "Код" },
  { id: "name", label: "Наименование позиции" },
  { id: "amount", label: "Объем, т" },
  { id: "price", label: "Цена реализации, руб/кг" },
];

type SelectorPropsTypes = {
  budget: {
    blocks: {
      sell: { values: WishesTypes; status: any };
      add: BlocksData[];
    };
  };
  purchase: {
    purchase: PurchaseData[];
  };
  production: {
    production: ProductsData[];
  };
  wishes: WishesStateTypes;
};

const Budget = ({ match }: MatchProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id: model, id2: scheme } = match.params;

  const { sell, sellStatus, add, purchase, production, wishes } = useSelector(
    ({
      budget: {
        blocks: {
          sell: { values: sell, status: sellStatus },
          add,
        },
      },
      purchase: { purchase },
      production: { production },
      wishes: { wishes },
    }: SelectorPropsTypes) => ({
      sell,
      sellStatus,
      add,
      purchase,
      production,
      wishes,
    })
  );

  useEffect(() => {
    dispatch(setStep(7));
    dispatch(getBlocksAdd(model, scheme));
    dispatch(getBlocksSell(model, scheme));
  }, [dispatch, model, scheme]);

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer>
          <Toolbar className={classes.toolBar}>
            <Typography variant="h6" component="h2">
              План продаж
            </Typography>
          </Toolbar>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className={classes.header}>
                <TableCell className={classes.emptyCell} />
                <TableCell className={classes.emptyCell} />
                {columnsWishes.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(sell).map((key1) => {
                console.log(sell[key1]);
                return (
                  <React.Fragment key={key1}>
                    <TableRow>
                      <TableCell
                        style={{
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                        colSpan={4}
                      >
                        <IconButton
                          style={{ marginRight: 16 }}
                          color="secondary"
                          size="small"
                        >
                          {sellStatus[key1].status ? (
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
                        {+sell[key1].amount.toFixed(8)}
                      </TableCell>
                      <TableCell style={{ fontWeight: 700 }} align="left">
                        {+sell[key1].averagePrice.toFixed(8)}
                      </TableCell>
                    </TableRow>
                    {sellStatus[key1].status &&
                      Object.keys(sell[key1].values).map((key2) => (
                        <React.Fragment key={key2}>
                          <TableRow>
                            <TableCell />
                            <TableCell
                              colSpan={3}
                              style={{
                                fontWeight: "bold",
                                cursor: "pointer",
                              }}
                            >
                              <IconButton
                                size="small"
                                color="secondary"
                                style={{ marginRight: 16 }}
                              >
                                {sellStatus[key1][key2].status ? (
                                  <ExpandMoreIcon />
                                ) : (
                                  <ChevronRightIcon />
                                )}
                              </IconButton>
                              <span>
                                Код:{" "}
                                <span style={{ fontWeight: 400 }}>{key2}</span>
                              </span>
                            </TableCell>
                            <TableCell align="left">
                              {+sell[key1].values[key2].amount.toFixed(8)}
                            </TableCell>
                            <TableCell align="left">
                              {+sell[key1].values[key2].averagePrice.toFixed(8)}
                            </TableCell>
                          </TableRow>
                          {sellStatus[key1][key2].status &&
                            sell[key1].values[key2].values.map(
                              (row: WishesItemTypes, index: number) => {
                                return (
                                  <TableRow key={`${key2}_${index}`}>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>{row.code}</TableCell>
                                    <TableCell>{row.name}</TableCell>
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
                                  </TableRow>
                                );
                              }
                            )}
                        </React.Fragment>
                      ))}
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Budget;
