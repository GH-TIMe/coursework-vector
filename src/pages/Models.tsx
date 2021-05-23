import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CustomTooltip } from "../components";

import { getModels } from "../redux/actions/models";
import { setStep } from "../redux/actions/steps";

import { ModelsData } from "../types";

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
} from "@material-ui/core";

import ReceiptIcon from "@material-ui/icons/Receipt";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AddIcon from "@material-ui/icons/Add";

import { useStyles } from "../styles";

type ColumnsTypes = {
  id: keyof ModelsData;
  label: string;
  align?: "right";
};

const columns: ColumnsTypes[] = [
  { id: "name", label: "Клиент" },
  { id: "month", label: "Месяц" },
  { id: "stage", align: "right", label: "Стадия" },
  { id: "num", align: "right", label: "Позиций" },
  {
    id: "profit",
    align: "right",
    label: "Прибыль (тыс. руб.)",
  },
];

interface ModelsState {
  models: {
    models: ModelsData[];
  };
}

const selectModels = ({ models: { models } }: ModelsState) => models;

export default function Models() {
  const classes = useStyles();

  // load models
  const dispatch = useDispatch();

  const rows = useSelector(selectModels);

  useEffect(() => {
    dispatch(setStep(0));
    dispatch(getModels());
  }, [dispatch]);

  const history = useHistory();

  const handleWishesClick = (id: number) => {
    history.push(`/${id}/wishes`);
  };

  const handlePowerBIClick = () => {
    history.push("/power_bi");
  };

  const handleAddModelClick = () => {
    history.push("/add_model");
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" component="h2">
            Список доступных моделей
          </Typography>
          <div className="right-side">
            <CustomTooltip title="Добавить модель">
              <IconButton
                color="secondary"
                aria-label="add model"
                onClick={handleAddModelClick}
              >
                <AddIcon />
              </IconButton>
            </CustomTooltip>
            <CustomTooltip title="Сравнение">
              <IconButton
                color="secondary"
                aria-label="Power BI"
                onClick={handlePowerBIClick}
              >
                <AssessmentIcon />
              </IconButton>
            </CustomTooltip>
          </div>
        </Toolbar>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.header}>
              <TableCell align="center">Действия</TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell align="center">
                    <CustomTooltip
                      title={<React.Fragment>Продажи</React.Fragment>}
                    >
                      <IconButton
                        onClick={() => handleWishesClick(row.id)}
                        color="secondary"
                        aria-label="go to step 2"
                      >
                        <ReceiptIcon />
                      </IconButton>
                    </CustomTooltip>
                  </TableCell>
                  {columns.map((column) => {
                    const value = row[column.id] || 0;
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
