import { Module } from "@nestjs/common";
import { BiomeModuleBase } from "./base/biome.module.base";
import { BiomeService } from "./biome.service";
import { BiomeController } from "./biome.controller";
import { BiomeResolver } from "./biome.resolver";

@Module({
  imports: [BiomeModuleBase],
  controllers: [BiomeController],
  providers: [BiomeService, BiomeResolver],
  exports: [BiomeService],
})
export class BiomeModule {}
