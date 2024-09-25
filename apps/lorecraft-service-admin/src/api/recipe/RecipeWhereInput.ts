import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecipeWhereInput = {
  id?: StringFilter;
  ingredients?: StringNullableFilter;
  name?: StringNullableFilter;
  output?: StringNullableFilter;
};
