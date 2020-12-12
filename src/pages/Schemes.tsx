import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getViewData } from "../redux/actions/schemes";
import { ColumnsTypes, SchemesStateTypes, MatchProps } from "../types";

const ViewTable = ({ match }: MatchProps) => {
  const dispatch = useDispatch();
  const id = +match.params.id;

  const columns: ColumnsTypes[] = [
    { id: "id", label: "№" },
    { id: "ts", label: "Дата" },
    { id: "profit", align: "right", label: "Прибыль" },
    { id: "type", align: "right", label: "Тип" },
  ];

  const rows = useSelector(
    ({ schemes: { schemes } }: SchemesStateTypes) => schemes
  );

  useEffect(() => {
    dispatch(getViewData(id));
  }, [dispatch, id]);

  return <></>;
};

export default ViewTable;
