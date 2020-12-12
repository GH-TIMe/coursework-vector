import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useStyles } from "../styles";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import NumberFormat from "react-number-format";

import { setStep } from "../redux/actions/steps";

import { MatchProps } from "../types";

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator={" "}
    />
  );
}

const Launch = ({ match }: MatchProps) => {
  const { id: model, id2: scheme } = match.params;

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStep(4));
  }, [dispatch]);

  const formatter = new Intl.NumberFormat("ru");

  const [intValueField, setIntValueField] = useState({
    value: "100",
    formattedValue: formatter.format(100),
  });

  const onChangeIntegerField = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const intRegex = /^[0-9]*$/;
    const value = e.target.value.replace(/\s/g, "");
    console.log(value);
    if (intRegex.test(value)) {
      setIntValueField({
        value,
        formattedValue: value ? formatter.format(+value) : "",
      });
    }
  };

  const [interval, setInterval] = useState("10");

  const handleChangeInterval = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInterval(e.target.value);
  };

  const history = useHistory();

  const handleClickRun = () => {
    alert("Моделирование запущенно!");
    history.push(`/${model}/schemes/${scheme}/wishes`);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h5" component="h2">
            Запуск процесса моделирования
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="count"
            name="count"
            label="Количество отбираемых решений"
            value={intValueField.formattedValue}
            onChange={(e) => onChangeIntegerField(e)}
            color="secondary"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="interval"
            name="interval"
            defaultValue={"10"}
            value={interval}
            onChange={handleChangeInterval}
            color="secondary"
            label="Интервал изменения объема продукции (+/- процентов)"
            InputProps={{
              inputComponent: NumberFormatCustom as any,
            }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={6}>
          <Button color="secondary" onClick={handleClickRun}>
            Запустить моделирование
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Launch;
