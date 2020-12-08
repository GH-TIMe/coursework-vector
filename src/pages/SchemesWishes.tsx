import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CustomTable } from "../components";
import { getProducts } from "../redux/actions/products";
import { setStep } from "../redux/actions/steps";
import { ProductsStateTypes, MatchProps, ColumnsTypes } from "../types";

const columns: ColumnsTypes[] = [
  { id: "code", label: "Код" },
  { id: "name", label: "Наименование\u00a0позиции" },
  {
    id: "amount",
    label: "Объем,\u00a0т",
    editable: true,
  },
  {
    id: "price",
    label: "Цена,\u00a0руб\u002fкг",
    editable: true,
  },
  {
    id: "curr_rent",
    label: "Рент-сть,\u00a0%",
    align: "right",
    format: (value: string | number) =>
      (+(+value).toFixed(2)).toLocaleString("ru-RU"),
  },
  {
    id: "last_volume",
    label: "Объем,\u00a0т",
    align: "right",
    format: (value: number | string) => (+value).toLocaleString("ru-RU"),
  },
  {
    id: "last_price",
    label: "Цена,\u00a0руб\u002fкг",
    align: "right",
    format: (value: number | string) => (+value).toLocaleString("ru-RU"),
  },
  {
    id: "last_rent",
    label: "Рент-сть,\u00a0%",
    align: "right",
    format: (value: string | number) =>
      (+(+value).toFixed(2)).toLocaleString("ru-RU"),
  },
];

const EditTable = ({ match }: MatchProps) => {
  const dispatch = useDispatch();
  const { id: schemesID, id2: wishesID } = match.params;

  const rows = useSelector(
    ({ products: { products } }: ProductsStateTypes) => products
  );

  useEffect(() => {
    dispatch(setStep(6));
    dispatch(getProducts(schemesID, wishesID));
  }, [dispatch, schemesID, wishesID]);

  return <CustomTable rows={rows} columns={columns} hover={false} />;
};

export default EditTable;
