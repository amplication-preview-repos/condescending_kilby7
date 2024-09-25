import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerDataServiceBase } from "./base/playerData.service.base";

@Injectable()
export class PlayerDataService extends PlayerDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
