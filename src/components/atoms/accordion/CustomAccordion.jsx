import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expanded: {
      "&$expanded": {
        margin: 0,
        boxShadow:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
        minHeight: "0px",

        color: "#D02F68",
        "& .MuiExpansionPanelSummary-expandIcon": {
          color: "#D02F68",
        },
      },
    },
  })
);

const CustomAccordion = ({ data }) => {
  const classes = useStyles();

  const [t] = useTranslation();

  const listQues = data.map((d) => (
    <ExpansionPanel classes={{ expanded: classes.expanded }} className="px-5">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          <span className="font-regular text-17">{t(d.title)}</span>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <span className="text-black font-sans text-15">
            {t(d.content)
              .split("\n")
              .map((c) => (
                <p>{c}</p>
              ))}
          </span>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ));
  return <div>{listQues}</div>;
};

export default CustomAccordion;
