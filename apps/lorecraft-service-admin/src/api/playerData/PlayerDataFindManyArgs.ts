import { PlayerDataWhereInput } from "./PlayerDataWhereInput";
import { PlayerDataOrderByInput } from "./PlayerDataOrderByInput";

export type PlayerDataFindManyArgs = {
  where?: PlayerDataWhereInput;
  orderBy?: Array<PlayerDataOrderByInput>;
  skip?: number;
  take?: number;
};
