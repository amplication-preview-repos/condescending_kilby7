import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NpcEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="quest" multiline source="quest" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
