import { SortOrder } from "../../util/SortOrder";

export type NpcOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  quest?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
