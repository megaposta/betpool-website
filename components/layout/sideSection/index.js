import { Stack } from "@mui/material";
import React from "react";
import classes from "./sideSection.module.css";
import SideSectionAccordion from "./components/accordion";

const data = [
  {
    id: 1,
    title: "BETPOOL ORIGINALS",
    options: [
      { id: 1, title: "option 1", nestedOption: [] },
      { id: 2, title: "option 2", nestedOption: [] },
    ],
  },
  {
    id: 2,
    title: "CASINO",
    options: [
      { id: 1, title: "option 1", nestedOption: [] },
      { id: 2, title: "option 2", nestedOption: [] },
    ],
  },
  {
    id: 3,
    title: "SPORTS",
    options: [
      { id: 1, title: "option 1", nestedOption: [] },
      { id: 2, title: "option 2", nestedOption: [] },
    ],
  },
  {
    id: 4,
    title: "OTHERS",
    options: [
      { id: 1, title: "LIVE SUPPORT", nestedOption: [] },
      { id: 2, title: "PROMOTIONS", nestedOption: [] },
      { id: 3, title: "REFER A FRIEND", nestedOption: [] },
      {
        id: 4,
        title: "SPONSORSHIP",
        nestedOption: [
          { id: 1, title: "options 1" },
          { id: 2, title: "options 2" },
          { id: 3, title: "options 3" },
        ],
      },
      {
        title: "FAQ",
        nestedOption: [
          { id: 1, title: "option 1", nestedOption: [] },
          { id: 2, title: "option 2", nestedOption: [] },
        ],
      },
    ],
  },
];
const SideSection = ({ customSx }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack sx={{ ...customSx }} className={classes.sideSection} spacing={2}>
      {data.map((item, index) => (
        <SideSectionAccordion
          key={index}
          handleChange={handleChange}
          expanded={expanded}
          data={item}
        />
      ))}
    </Stack>
  );
};

export default SideSection;
