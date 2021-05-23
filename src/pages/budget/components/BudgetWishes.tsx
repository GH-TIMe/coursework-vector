import React, { useEffect } from "react";
import { connect } from "react-redux";

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

import { CustomTooltip } from "../../../components";

import {
  closeAllSell,
  expandAllSell,
  getBlocksSell,
  setBlockSellStatus,
} from "../../../redux/actions/budget";

import {
  closeAllWishes,
  expandAllWishes,
  getWishes,
  setWishesLoaded,
  setWishesStatus,
} from "../../../redux/actions/wishes";

import { RootState } from "../../../redux/reducers";
import { AppThunkDispatch } from "../../../redux/store";
import { BlocksData, WishesItemTypes } from "../../../types";
import { useStyles } from "../../../styles";
import Loader from "../../../components/Loader";

type ColumnsWishesTypes = {
  id: keyof BlocksData;
  label: string;
  align?: "right";
};

const columnsWishes: ColumnsWishesTypes[] = [
  { id: "code", label: "№" },
  { id: "name", label: "Наименование позиции" },
  { id: "amount", label: "Объем, т" },
  { id: "price", label: "Цена реализации, руб/кг" },
];

type BudgetWishesProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { model: string; scheme: string };

const BudgetWishes: React.FC<BudgetWishesProps> = ({
  model,
  scheme,
  wishes,
  wishesStatus,
  isOpenWishes,
  sell,
  sellStatus,
  isOpenSell,
  setBlockSellStatus,
  setWishesStatus,
  expandAllWishes,
  expandAllSell,
  closeAllWishes,
  closeAllSell,
  getWishes,
  getBlocksSell,
  loaded,
  setWishesLoaded,
}) => {
  const classes = useStyles();

  useEffect(() => {
    setWishesLoaded(false);
    getWishes(+model);
    getBlocksSell(model, scheme);
  }, [model, scheme, getWishes, getBlocksSell, setWishesLoaded]);

  const handleClickArrowSells = (...args: string[]) => {
    setBlockSellStatus(args);
  };

  const handleClickArrowWishes = (...args: string[]) => {
    setWishesStatus(args);
  };

  const handleExpandAllWishes = () => {
    if (!isOpenWishes && !isOpenSell) {
      expandAllWishes();
      expandAllSell();
    } else {
      closeAllWishes();
      closeAllSell();
    }
  };

  return (
    <Paper className={classes.budgetTables}>
      <TableContainer>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" component="h2">
            План продаж
          </Typography>
        </Toolbar>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow className={classes.header}>
              <TableCell>
                <CustomTooltip
                  title={
                    !isOpenWishes && !isOpenSell
                      ? "Раскрыть список"
                      : "Скрыть список"
                  }
                >
                  <IconButton
                    color="secondary"
                    aria-label="expand all"
                    onClick={handleExpandAllWishes}
                    size="small"
                  >
                    {isOpenWishes && isOpenSell ? (
                      <ExpandMoreIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </CustomTooltip>
              </TableCell>
              <TableCell className={classes.emptyCell} />
              {columnsWishes.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!loaded ? (
              <Loader empty={2} content={5} repeat={10} />
            ) : (
              <>
                {Object.keys(wishes).map((key1) => {
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
                            onClick={() => handleClickArrowWishes(key1)}
                          >
                            {wishesStatus[key1].status ? (
                              <ExpandMoreIcon />
                            ) : (
                              <ChevronRightIcon />
                            )}
                          </IconButton>
                          <span>
                            Код: <span style={{ fontWeight: 400 }}>{key1}</span>
                          </span>
                        </TableCell>
                        <TableCell style={{ fontWeight: 700 }}>
                          {+wishes[key1].amount.toFixed(2)}
                        </TableCell>
                        <TableCell style={{ fontWeight: 700 }}>
                          {+wishes[key1].averagePrice.toFixed(2)}
                        </TableCell>
                      </TableRow>
                      {wishesStatus[key1].status &&
                        Object.keys(wishes[key1].values).map((key2) => (
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
                                  onClick={() =>
                                    handleClickArrowWishes(key1, key2)
                                  }
                                >
                                  {wishesStatus[key1][key2].status ? (
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
                                {+wishes[key1].values[key2].amount.toFixed(2)}
                              </TableCell>
                              <TableCell align="left">
                                {
                                  +wishes[key1].values[
                                    key2
                                  ].averagePrice.toFixed(2)
                                }
                              </TableCell>
                            </TableRow>
                            {wishesStatus[key1][key2].status &&
                              wishes[key1].values[key2].values.map(
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
                {Object.keys(sell).map((key1) => {
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
                            onClick={() => handleClickArrowSells(key1)}
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
                        <TableCell style={{ fontWeight: 700 }}>
                          {+sell[key1].amount.toFixed(2)}
                        </TableCell>
                        <TableCell style={{ fontWeight: 700 }}>
                          {+sell[key1].averagePrice.toFixed(2)}
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
                                  onClick={() =>
                                    handleClickArrowSells(key1, key2)
                                  }
                                >
                                  {sellStatus[key1][key2].status ? (
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
                                {+sell[key1].values[key2].amount.toFixed(2)}
                              </TableCell>
                              <TableCell align="left">
                                {
                                  +sell[key1].values[key2].averagePrice.toFixed(
                                    2
                                  )
                                }
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
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const mapStateToProps = (state: RootState) => ({
  wishes: state.wishes.wishes,
  wishesStatus: state.wishes.status,
  isOpenWishes: state.wishes.isOpen,
  loaded: state.wishes.loaded,
  isOpenSell: state.budget.blocks.sell.isOpen,
  sell: state.budget.blocks.sell.values,
  sellStatus: state.budget.blocks.sell.status,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch) => ({
  setBlockSellStatus: (args: string[]) => dispatch(setBlockSellStatus(args)),
  setWishesStatus: (args: string[]) => dispatch(setWishesStatus(args)),
  expandAllWishes: () => dispatch(expandAllWishes),
  closeAllWishes: () => dispatch(closeAllWishes),
  setWishesLoaded: (status: boolean) => dispatch(setWishesLoaded(status)),
  expandAllSell: () => dispatch(expandAllSell),
  closeAllSell: () => dispatch(closeAllSell),
  getWishes: (model: number) => dispatch(getWishes(model)),
  getBlocksSell: (model: string, sheme: string) =>
    dispatch(getBlocksSell(model, sheme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetWishes);
