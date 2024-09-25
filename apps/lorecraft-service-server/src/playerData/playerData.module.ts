import { Module } from "@nestjs/common";
import { PlayerDataModuleBase } from "./base/playerData.module.base";
import { PlayerDataService } from "./playerData.service";
import { PlayerDataController } from "./playerData.controller";
import { PlayerDataResolver } from "./playerData.resolver";

@Module({
  imports: [PlayerDataModuleBase],
  controllers: [PlayerDataController],
  providers: [PlayerDataService, PlayerDataResolver],
  exports: [PlayerDataService],
})
export class PlayerDataModule {}
