import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MiningResourceService } from "./miningResource.service";
import { MiningResourceControllerBase } from "./base/miningResource.controller.base";

@swagger.ApiTags("miningResources")
@common.Controller("miningResources")
export class MiningResourceController extends MiningResourceControllerBase {
  constructor(protected readonly service: MiningResourceService) {
    super(service);
  }
}
