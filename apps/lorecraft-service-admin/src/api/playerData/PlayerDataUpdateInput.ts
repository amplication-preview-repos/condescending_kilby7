import { InputJsonValue } from "../../types";

export type PlayerDataUpdateInput = {
  inventory?: InputJsonValue;
  progress?: string | null;
  username?: string | null;
};
