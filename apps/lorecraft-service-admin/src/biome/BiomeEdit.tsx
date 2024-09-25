import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BiomeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput
          label="uniqueCharacteristics"
          multiline
          source="uniqueCharacteristics"
        />
      </SimpleForm>
    </Edit>
  );
};
