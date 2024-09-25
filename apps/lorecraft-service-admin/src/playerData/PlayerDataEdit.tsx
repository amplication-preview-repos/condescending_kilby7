import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PlayerDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="progress" source="progress" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
