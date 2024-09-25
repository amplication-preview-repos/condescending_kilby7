import * as graphql from "@nestjs/graphql";
import { MiningResourceResolverBase } from "./base/miningResource.resolver.base";
import { MiningResource } from "./base/MiningResource";
import { MiningResourceService } from "./miningResource.service";

@graphql.Resolver(() => MiningResource)
export class MiningResourceResolver extends MiningResourceResolverBase {
  constructor(protected readonly service: MiningResourceService) {
    super(service);
  }
}
