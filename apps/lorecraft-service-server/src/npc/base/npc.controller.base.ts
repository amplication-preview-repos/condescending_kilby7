/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NpcService } from "../npc.service";
import { NpcCreateInput } from "./NpcCreateInput";
import { Npc } from "./Npc";
import { NpcFindManyArgs } from "./NpcFindManyArgs";
import { NpcWhereUniqueInput } from "./NpcWhereUniqueInput";
import { NpcUpdateInput } from "./NpcUpdateInput";

export class NpcControllerBase {
  constructor(protected readonly service: NpcService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Npc })
  async createNpc(@common.Body() data: NpcCreateInput): Promise<Npc> {
    return await this.service.createNpc({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quest: true,
        role: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Npc] })
  @ApiNestedQuery(NpcFindManyArgs)
  async npcs(@common.Req() request: Request): Promise<Npc[]> {
    const args = plainToClass(NpcFindManyArgs, request.query);
    return this.service.npcs({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quest: true,
        role: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Npc })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async npc(@common.Param() params: NpcWhereUniqueInput): Promise<Npc | null> {
    const result = await this.service.npc({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quest: true,
        role: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Npc })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateNpc(
    @common.Param() params: NpcWhereUniqueInput,
    @common.Body() data: NpcUpdateInput
  ): Promise<Npc | null> {
    try {
      return await this.service.updateNpc({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          quest: true,
          role: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Npc })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteNpc(
    @common.Param() params: NpcWhereUniqueInput
  ): Promise<Npc | null> {
    try {
      return await this.service.deleteNpc({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          quest: true,
          role: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
