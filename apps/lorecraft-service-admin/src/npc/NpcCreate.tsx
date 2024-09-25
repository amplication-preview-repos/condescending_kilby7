import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NpcCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="quest" multiline source="quest" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Create>
  );
};
