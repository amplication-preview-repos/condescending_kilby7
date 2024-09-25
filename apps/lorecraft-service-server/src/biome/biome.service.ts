import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BiomeServiceBase } from "./base/biome.service.base";

@Injectable()
export class BiomeService extends BiomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
