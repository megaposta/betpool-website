import * as React from "react";
import List from "@mui/material/List";
import NestedListButton from "./components/NestedListButton";
import ListButton from "./components/ListButton";

export default function AccordionList({ data }) {
  return (
    <List sx={{ width: "100%" }} component="nav">
      {data.nestedOption.length > 0 ? (
        <NestedListButton key={data.id} data={data} />
      ) : (
        <ListButton key={data.id} data={data} />
      )}
    </List>
  );
}
