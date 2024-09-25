import { MiningResourceWhereInput } from "./MiningResourceWhereInput";
import { MiningResourceOrderByInput } from "./MiningResourceOrderByInput";

export type MiningResourceFindManyArgs = {
  where?: MiningResourceWhereInput;
  orderBy?: Array<MiningResourceOrderByInput>;
  skip?: number;
  take?: number;
};
