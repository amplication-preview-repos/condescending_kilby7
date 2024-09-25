import { Biome as TBiome } from "../api/biome/Biome";

export const BIOME_TITLE_FIELD = "name";

export const BiomeTitle = (record: TBiome): string => {
  return record.name?.toString() || String(record.id);
};
