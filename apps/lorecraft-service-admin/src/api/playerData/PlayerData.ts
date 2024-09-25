import { JsonValue } from "type-fest";

export type PlayerData = {
  createdAt: Date;
  id: string;
  inventory: JsonValue;
  progress: string | null;
  updatedAt: Date;
  username: string | null;
};
