import { SortOrder } from "../../util/SortOrder";

export type BiomeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  uniqueCharacteristics?: SortOrder;
  updatedAt?: SortOrder;
};
