import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useReactToPrint } from "react-to-print";

import { expandAllSell } from "../../redux/actions/budget";
import { setStep } from "../../redux/actions/steps";

import { Button } from "@material-ui/core";

import { Print as PrintIcon } from "@material-ui/icons";

import { expandAllWishes } from "../../redux/actions/wishes";
import { expandAllProduction } from "../../redux/actions/production";
import { RouteComponentProps } from "react-router-dom";
import BudgetWishes from "./components/BudgetWishes";
import BudgetProduction from "./components/BudgetProduction";
import BudgetPurchase from "./components/BudgetPurchase";
import { useStyles } from "../../styles";

interface MatchParams {
  id: string;
  id2: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const Budget = ({ match }: MatchProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { id: model, id2: scheme } = match.params;

  const printRef = useRef<any>(null);

  useEffect(() => {
    dispatch(setStep(7));
  }, [dispatch]);

  const [print, setPrint] = useState<boolean>(false);

  const printBudget = useReactToPrint({
    content: () => printRef.current,
  });

  useEffect(() => {
    if (print) {
      printBudget && printBudget();
      setPrint(false);
    }
  }, [print, printBudget]);

  const handleClickPrint = () => {
    dispatch(expandAllWishes);
    dispatch(expandAllSell);
    dispatch(expandAllProduction);
    setPrint(true);
  };

  return (
    <>
      <div ref={printRef}>
        <BudgetWishes model={model} scheme={scheme} />
        <BudgetProduction model={model} scheme={scheme} />
        <BudgetPurchase model={model} scheme={scheme} />
      </div>
      <div className={classes.budgetTables}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PrintIcon />}
          onClick={handleClickPrint}
        >
          Распечатать
        </Button>
      </div>
    </>
  );
};

export default Budget;
