import { InputJsonValue } from "../../types";

export type PlayerDataCreateInput = {
  inventory?: InputJsonValue;
  progress?: string | null;
  username?: string | null;
};
