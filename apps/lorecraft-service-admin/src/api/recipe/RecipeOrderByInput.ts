import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ingredients?: SortOrder;
  name?: SortOrder;
  output?: SortOrder;
  updatedAt?: SortOrder;
};
