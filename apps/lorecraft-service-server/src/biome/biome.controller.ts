import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BiomeService } from "./biome.service";
import { BiomeControllerBase } from "./base/biome.controller.base";

@swagger.ApiTags("biomes")
@common.Controller("biomes")
export class BiomeController extends BiomeControllerBase {
  constructor(protected readonly service: BiomeService) {
    super(service);
  }
}
