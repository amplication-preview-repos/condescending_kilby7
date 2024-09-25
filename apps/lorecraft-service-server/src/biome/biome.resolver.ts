import * as graphql from "@nestjs/graphql";
import { BiomeResolverBase } from "./base/biome.resolver.base";
import { Biome } from "./base/Biome";
import { BiomeService } from "./biome.service";

@graphql.Resolver(() => Biome)
export class BiomeResolver extends BiomeResolverBase {
  constructor(protected readonly service: BiomeService) {
    super(service);
  }
}
