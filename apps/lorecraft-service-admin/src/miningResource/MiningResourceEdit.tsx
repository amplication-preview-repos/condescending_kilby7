import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MiningResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
