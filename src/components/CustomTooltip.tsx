import React from "react";
import { Theme, Tooltip, withStyles } from "@material-ui/core";

const LongTextTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const CustomTooltip = (props: any) => {
  return <LongTextTooltip {...props} />;
};

export default CustomTooltip;
