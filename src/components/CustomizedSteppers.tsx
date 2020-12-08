import {
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  SvgIcon,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import AppsIcon from "@material-ui/icons/Apps";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ReactComponent as ConstructionIcon } from "../img/construction-black-24dp.svg";
import { ReactComponent as CalculateIcon } from "../img/calculate-black-24dp.svg";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import EditIcon from "@material-ui/icons/Edit";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { StepIconProps } from "@material-ui/core/StepIcon";
import StepConnector from "@material-ui/core/StepConnector";

import { StepStateTypes } from "../types";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "#a1343c",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#a1343c",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#a1343c",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "#a1343c",
  },
});

const CustomizedSteppers = () => {
  const activeStep = useSelector(({ steps: { step } }: StepStateTypes) => step);

  const steps = getSteps();

  function getSteps() {
    return [
      "Модели",
      "Продажи",
      "Закупки",
      "Производство",
      "Расчёт",
      "Сравнение",
      "Корректировка",
      "Бюджет",
    ];
  }

  function ColorlibStepIcon(props: StepIconProps) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <AppsIcon />,
      2: <ReceiptIcon />,
      3: <ShoppingCartIcon />,
      4: <SvgIcon component={ConstructionIcon} viewBox="0 0 24 24" />,
      5: <SvgIcon component={CalculateIcon} viewBox="0 0 24 24" />,
      6: <CompareArrowsIcon />,
      7: <EditIcon />,
      8: <AttachMoneyIcon />,
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CustomizedSteppers;
