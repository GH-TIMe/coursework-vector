import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AddIcon from "@material-ui/icons/Add";

interface EnhancedTableToolbarProps {
  numSelected: number;
  onDeleteItems: (e: React.MouseEvent<unknown>) => void;
  getSelectedID: () => number;
}

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    title: {
      flex: "1 1 100%",
    },
    upload: {
      display: "none",
    },
  })
);

const EnhancedTableToolbar = () => {
  const classes = useToolbarStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar className={classes.root}>
      <Tooltip title="Power BI">
        <Link to="power_bi">
          <IconButton aria-label="analysis">
            <AssessmentIcon />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="Add">
        <>
          <IconButton
            onClick={handleClick}
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-label="add"
          >
            <AddIcon />
          </IconButton>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <input
              id="upload"
              className={classes.upload}
              type="file"
              accept=".csv"
            />
            <label htmlFor="upload">
              <MenuItem onClick={handleClose}>Загрузить CSV</MenuItem>
            </label>
            <MenuItem onClick={handleClose}>
              Из справочника существующего клиента
            </MenuItem>
          </Menu>
        </>
      </Tooltip>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
