import { BiomeWhereInput } from "./BiomeWhereInput";
import { BiomeOrderByInput } from "./BiomeOrderByInput";

export type BiomeFindManyArgs = {
  where?: BiomeWhereInput;
  orderBy?: Array<BiomeOrderByInput>;
  skip?: number;
  take?: number;
};
