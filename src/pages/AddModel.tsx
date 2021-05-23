import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import AttachFileIcon from "@material-ui/icons/AttachFile";

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@material-ui/core";

import { initialClients } from "../redux/actions/add_model";
import { useAppSelector } from "../redux/store";
import { useStyles } from "../styles";
import { API_HOST, API_PATH } from "../config";
import { useHistory } from "react-router";

const AddModel = () => {
  const classes = useStyles();

  const history = useHistory();

  const { clients } = useAppSelector((state) => state.addModel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialClients());
  }, [dispatch]);

  const [method, setMethod] = useState<string>("current_client");

  const handleChangeMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMethod(e.target.value);
  };

  const [client, setClient] = useState<string>("");

  const handleChangeClient = (e: React.ChangeEvent<{ value: unknown }>) => {
    setClient(e.target.value as string);
  };

  const [file, setFile] = useState<File>();

  const handleChangeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const request = new FormData();
    request.append("model_source", method);

    switch (method) {
      case "current_client":
        request.append("client_id", client);
        break;
      case "excel_file":
        if (file) {
          request.append("file", file);
          break;
        }
        return;
    }

    axios({
      method: "post",
      url: `${API_HOST}/${API_PATH}/add_model/`,
      data: request,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    }).finally(() => history.push("/"));
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" component="h2">
              Добавление моделей
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset" required>
              <FormLabel focused={false} component="legend">
                Выберите источник справочников новой модели:
              </FormLabel>
              <RadioGroup
                aria-label="Источник новой модели"
                name="model_source"
                value={method}
                onChange={handleChangeMethod}
              >
                <FormControlLabel
                  value="current_client"
                  control={<Radio />}
                  label="Из справочников существующего клиента"
                />
                <FormControlLabel
                  value="excel_file"
                  control={<Radio />}
                  label="Загрузить новые справочники из Excel"
                />
                <FormControlLabel
                  value="manual"
                  disabled
                  control={<Radio />}
                  label="Ввести новые справочники вручную"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {method === "current_client" ? (
            <Grid item xs={12} sm={12}>
              <FormControl
                component="fieldset"
                color="secondary"
                className={classes.formControl}
                required
              >
                <FormLabel
                  focused={false}
                  component="legend"
                  style={{ marginBottom: 10 }}
                >
                  Выберите клиента:
                </FormLabel>
                <InputLabel id="client_id">Клиент</InputLabel>
                <Select
                  labelId="client_id"
                  id="client_id"
                  label="Клиент"
                  value={client}
                  onChange={handleChangeClient}
                >
                  {clients.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ) : null}

          {method === "excel_file" ? (
            <Grid item xs={12} sm={12}>
              <Typography variant="body1" component="span">
                Прикрепить файл:
              </Typography>

              <IconButton color="secondary" component="label">
                <AttachFileIcon />
                <input
                  id="upload-file"
                  onChange={handleChangeFileUpload}
                  type="file"
                  name="file"
                  hidden
                />
              </IconButton>
              <Typography variant="body2" component="span">
                {file && file.name}
              </Typography>
            </Grid>
          ) : null}

          <Grid item xs={3} sm={6}>
            <Button color="secondary" type="submit">
              Отправить
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddModel;
