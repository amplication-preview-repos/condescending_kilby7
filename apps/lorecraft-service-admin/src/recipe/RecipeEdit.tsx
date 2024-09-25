import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RecipeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ingredients" multiline source="ingredients" />
        <TextInput label="name" source="name" />
        <TextInput label="output" source="output" />
      </SimpleForm>
    </Edit>
  );
};
