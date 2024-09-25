import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BiomeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput
          label="uniqueCharacteristics"
          multiline
          source="uniqueCharacteristics"
        />
      </SimpleForm>
    </Create>
  );
};
