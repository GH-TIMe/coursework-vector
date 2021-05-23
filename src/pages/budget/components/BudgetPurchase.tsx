import React, { useEffect } from "react";

import {
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
import { useStyles } from "../../../styles";
import { PurchaseData } from "../../../types";
import { RootState } from "../../../redux/reducers";
import {
  getPurchases,
  setPurchaseLoaded,
} from "../../../redux/actions/purchase";
import { getBlocksAdd } from "../../../redux/actions/budget";
import { AppThunkDispatch } from "../../../redux/store";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";

type ColumnsPurchaseTypes = {
  id: keyof PurchaseData;
  label: string;
  align?: "right";
};

const columnsPurchase: ColumnsPurchaseTypes[] = [
  { id: "name", label: "Наименование" },
  { id: "amount", label: "Закупка, т" },
  { id: "price", label: "Цена, руб/кг" },
];

type BudgetPurchaseProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { model: string; scheme: string };

const BudgetPurchase: React.FC<BudgetPurchaseProps> = ({
  model,
  scheme,
  purchase,
  add,
  getPurchases,
  getBlocksAdd,
  loaded,
  setPurchaseLoaded,
}) => {
  const classes = useStyles();

  useEffect(() => {
    setPurchaseLoaded(false);
    getPurchases(model, scheme);
    getBlocksAdd(model, scheme);
  }, [model, scheme, getPurchases, getBlocksAdd, setPurchaseLoaded]);

  return (
    <Paper className={classes.budgetTables}>
      <TableContainer>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" component="h2">
            План закупок
          </Typography>
        </Toolbar>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow className={classes.header}>
              {columnsPurchase.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!loaded ? (
              <Loader content={4} repeat={10} />
            ) : (
              <>
                {purchase.map(({ id, name, amount, price }) => {
                  return (
                    <TableRow key={id}>
                      <TableCell>{name}</TableCell>
                      <TableCell>{amount}</TableCell>
                      <TableCell>{price}</TableCell>
                    </TableRow>
                  );
                })}
                {add.map(({ id, name, amount, price }) => {
                  return (
                    <TableRow key={id}>
                      <TableCell>{name}</TableCell>
                      <TableCell>{amount}</TableCell>
                      <TableCell>{price}</TableCell>
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

const mapStateToProps = (state: RootState) => ({
  purchase: state.purchase.purchase,
  loaded: state.purchase.loaded,
  add: state.budget.blocks.add,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch) => ({
  getPurchases: (model: string, scheme: string) =>
    dispatch(getPurchases(model, scheme, "1")),
  getBlocksAdd: (model: string, sheme: string) =>
    dispatch(getBlocksAdd(model, sheme)),
  setPurchaseLoaded: (status: boolean) => dispatch(setPurchaseLoaded(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPurchase);
