import { Module } from "@nestjs/common";
import { MiningResourceModuleBase } from "./base/miningResource.module.base";
import { MiningResourceService } from "./miningResource.service";
import { MiningResourceController } from "./miningResource.controller";
import { MiningResourceResolver } from "./miningResource.resolver";

@Module({
  imports: [MiningResourceModuleBase],
  controllers: [MiningResourceController],
  providers: [MiningResourceService, MiningResourceResolver],
  exports: [MiningResourceService],
})
export class MiningResourceModule {}
