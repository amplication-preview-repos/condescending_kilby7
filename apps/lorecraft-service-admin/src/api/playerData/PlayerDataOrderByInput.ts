import { SortOrder } from "../../util/SortOrder";

export type PlayerDataOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inventory?: SortOrder;
  progress?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
