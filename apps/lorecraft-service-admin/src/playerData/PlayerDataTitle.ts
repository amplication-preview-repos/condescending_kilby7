import { PlayerData as TPlayerData } from "../api/playerData/PlayerData";

export const PLAYERDATA_TITLE_FIELD = "username";

export const PlayerDataTitle = (record: TPlayerData): string => {
  return record.username?.toString() || String(record.id);
};
