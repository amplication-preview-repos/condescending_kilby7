import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PlayerDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="progress" source="progress" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
