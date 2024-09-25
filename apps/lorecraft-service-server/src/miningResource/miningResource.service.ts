import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MiningResourceServiceBase } from "./base/miningResource.service.base";

@Injectable()
export class MiningResourceService extends MiningResourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
