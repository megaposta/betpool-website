import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./sideSectionAccordion.module.css";
import AccordionList from "../accordionList";

const SideSectionAccordion = ({ expanded, handleChange, data }) => {
  return (
    <Accordion
      expanded={expanded === data.title}
      onChange={handleChange(data.title)}
      className={classes.accordionContainer}
      sx={{
        "&.MuiAccordion-root:before": {
          height: 0,
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              fill: expanded === data.title ? "#E10A0A" : "",
              border:
                expanded === data.title
                  ? "1px solid #E10A0A"
                  : "1px solid #181E26",
              borderRadius: "50%",
            }}
          />
        }
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography
          className={`${classes.accordionTitle}  ${
            expanded === data.title ? classes.extended : ""
          }`}
        >
          {data.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {data.options.length > 0 &&
          data.options.map((item, index) => (
            <AccordionList key={index} data={item} />
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default SideSectionAccordion;
