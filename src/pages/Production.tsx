import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MatchProps, ProductionItemTypes } from "../types";

import {
  closeAllProduction,
  expandAllProduction,
  getProduction,
  setProductionLoaded,
  setProductionStatus,
} from "../redux/actions/production";
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
  Toolbar,
  Typography,
} from "@material-ui/core";

import {
  Clear as ClearIcon,
  Done as DoneIcon,
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";

import { useStyles } from "../styles";
import { useAppSelector } from "../redux/store";
import Loader from "../components/Loader";

type ToolbarPropsTypes = {
  model: string;
  scheme: string | undefined;
  changed: string | undefined;
};

const ProductionToolbar = ({ model, scheme, changed }: ToolbarPropsTypes) => {
  const classes = useStyles();

  const history = useHistory();

  const handleClickRefuse = () => {
    const URL =
      changed !== "0"
        ? `/${model}/schemes/${scheme}/wishes`
        : `/${model}/wishes`;
    history.push(URL);
  };

  const handleClickAccept = () => {
    const URL =
      changed !== "0"
        ? `/${model}/schemes/${scheme}/budget`
        : `/${model}/schemes/${scheme}/launch`;
    history.push(URL);
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
        Корректировка плана производства
      </Typography>
      <div className="right-side">
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

const Production = ({ match }: MatchProps) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { id: model, id2: scheme, changed } = match.params;

  useEffect(() => {
    dispatch(setProductionLoaded(false));
    dispatch(setStep(changed !== "0" ? 6 : 3));
    dispatch(getProduction(model, scheme, changed));
  }, [dispatch, model, scheme, changed]);

  const {
    production: rows,
    status,
    isOpen,
    loaded,
  } = useAppSelector((state) => state.production);

  const handleClick = (...args: string[]) => {
    dispatch(setProductionStatus(args));
  };

  const handleExpandAll = () => {
    if (!isOpen) {
      dispatch(expandAllProduction);
    } else {
      dispatch(closeAllProduction);
    }
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <ProductionToolbar model={model} scheme={scheme} changed={changed} />
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
                            </TableRow>
                            {status[key1][key2].status &&
                              rows[key1].values[key2].values.map(
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

export default Production;
