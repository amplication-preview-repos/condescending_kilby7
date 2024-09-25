import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MiningResourceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: IntNullableFilter;
  typeField?: StringNullableFilter;
};
