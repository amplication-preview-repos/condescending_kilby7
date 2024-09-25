import * as graphql from "@nestjs/graphql";
import { PlayerDataResolverBase } from "./base/playerData.resolver.base";
import { PlayerData } from "./base/PlayerData";
import { PlayerDataService } from "./playerData.service";

@graphql.Resolver(() => PlayerData)
export class PlayerDataResolver extends PlayerDataResolverBase {
  constructor(protected readonly service: PlayerDataService) {
    super(service);
  }
}
