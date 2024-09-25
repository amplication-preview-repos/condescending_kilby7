import { MiningResource as TMiningResource } from "../api/miningResource/MiningResource";

export const MININGRESOURCE_TITLE_FIELD = "name";

export const MiningResourceTitle = (record: TMiningResource): string => {
  return record.name?.toString() || String(record.id);
};
