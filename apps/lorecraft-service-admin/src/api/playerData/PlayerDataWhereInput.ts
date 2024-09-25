import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlayerDataWhereInput = {
  id?: StringFilter;
  inventory?: JsonFilter;
  progress?: StringNullableFilter;
  username?: StringNullableFilter;
};
