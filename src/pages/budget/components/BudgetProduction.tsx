import React, { useEffect } from "react";

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
import { useStyles } from "../../../styles";
import { RootState } from "../../../redux/reducers";
import { AppThunkDispatch } from "../../../redux/store";
import {
  closeAllProduction,
  expandAllProduction,
  getProduction,
  setProductionLoaded,
  setProductionStatus,
} from "../../../redux/actions/production";
import { connect } from "react-redux";
import { ProductionItemTypes } from "../../../types";
import Loader from "../../../components/Loader";

type BudgetProductionProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { model: string; scheme: string };

const BudgetProduction: React.FC<BudgetProductionProps> = ({
  model,
  scheme,
  production,
  productionStatus,
  isOpen,
  setProductionStatus,
  expandAllProduction,
  closeAllProduction,
  getProduction,
  loaded,
  setProductionLoaded,
}) => {
  const classes = useStyles();

  useEffect(() => {
    setProductionLoaded(false);
    getProduction(model, scheme);
  }, [model, scheme, getProduction, setProductionLoaded]);

  const handleClickArrowProduction = (...args: string[]) => {
    setProductionStatus(args);
  };

  const handleExpandAllProduction = () => {
    if (!isOpen) {
      expandAllProduction();
    } else {
      closeAllProduction();
    }
  };

  return (
    <Paper className={classes.budgetTables}>
      <TableContainer>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" component="h2">
            План производства
          </Typography>
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
                    onClick={handleExpandAllProduction}
                    size="small"
                  >
                    {isOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </CustomTooltip>
              </TableCell>
              <TableCell className={classes.emptyCell}></TableCell>
              <TableCell style={{ width: 100 }}>№</TableCell>
              <TableCell style={{ width: 400 }}>Операция</TableCell>
              <TableCell style={{ minWidth: 150 }}>Объем, т</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loaded ? (
              <Loader empty={2} content={3} repeat={10} />
            ) : (
              <>
                {Object.keys(production).map((key1) => {
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
                            onClick={() => handleClickArrowProduction(key1)}
                          >
                            {productionStatus[key1].status ? (
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
                          {+production[key1].amount.toFixed(2)}
                        </TableCell>
                      </TableRow>
                      {productionStatus[key1].status &&
                        Object.keys(production[key1].values).map((key2) => (
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
                                    handleClickArrowProduction(key1, key2)
                                  }
                                >
                                  {productionStatus[key1][key2].status ? (
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
                                {
                                  +production[key1].values[key2].amount.toFixed(
                                    2
                                  )
                                }
                              </TableCell>
                            </TableRow>
                            {productionStatus[key1][key2].status &&
                              production[key1].values[key2].values.map(
                                (row: ProductionItemTypes, index: number) => {
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
  production: state.production.production,
  productionStatus: state.production.status,
  isOpen: state.production.isOpen,
  loaded: state.production.loaded,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch) => ({
  setProductionStatus: (args: string[]) => dispatch(setProductionStatus(args)),
  expandAllProduction: () => dispatch(expandAllProduction),
  closeAllProduction: () => dispatch(closeAllProduction),
  getProduction: (model: string, scheme: string) =>
    dispatch(getProduction(model, scheme, "1")),
  setProductionLoaded: (status: boolean) =>
    dispatch(setProductionLoaded(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetProduction);
