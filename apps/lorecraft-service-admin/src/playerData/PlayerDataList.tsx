import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PlayerDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PlayerDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="inventory" source="inventory" />
        <TextField label="progress" source="progress" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
