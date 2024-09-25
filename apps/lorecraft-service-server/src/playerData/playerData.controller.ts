import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerDataService } from "./playerData.service";
import { PlayerDataControllerBase } from "./base/playerData.controller.base";

@swagger.ApiTags("playerData")
@common.Controller("playerData")
export class PlayerDataController extends PlayerDataControllerBase {
  constructor(protected readonly service: PlayerDataService) {
    super(service);
  }
}
