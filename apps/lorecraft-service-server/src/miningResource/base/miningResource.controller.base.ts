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
import { MiningResourceService } from "../miningResource.service";
import { MiningResourceCreateInput } from "./MiningResourceCreateInput";
import { MiningResource } from "./MiningResource";
import { MiningResourceFindManyArgs } from "./MiningResourceFindManyArgs";
import { MiningResourceWhereUniqueInput } from "./MiningResourceWhereUniqueInput";
import { MiningResourceUpdateInput } from "./MiningResourceUpdateInput";

export class MiningResourceControllerBase {
  constructor(protected readonly service: MiningResourceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MiningResource })
  async createMiningResource(
    @common.Body() data: MiningResourceCreateInput
  ): Promise<MiningResource> {
    return await this.service.createMiningResource({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quantity: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MiningResource] })
  @ApiNestedQuery(MiningResourceFindManyArgs)
  async miningResources(
    @common.Req() request: Request
  ): Promise<MiningResource[]> {
    const args = plainToClass(MiningResourceFindManyArgs, request.query);
    return this.service.miningResources({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quantity: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MiningResource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async miningResource(
    @common.Param() params: MiningResourceWhereUniqueInput
  ): Promise<MiningResource | null> {
    const result = await this.service.miningResource({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quantity: true,
        typeField: true,
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
  @swagger.ApiOkResponse({ type: MiningResource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMiningResource(
    @common.Param() params: MiningResourceWhereUniqueInput,
    @common.Body() data: MiningResourceUpdateInput
  ): Promise<MiningResource | null> {
    try {
      return await this.service.updateMiningResource({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          quantity: true,
          typeField: true,
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
  @swagger.ApiOkResponse({ type: MiningResource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMiningResource(
    @common.Param() params: MiningResourceWhereUniqueInput
  ): Promise<MiningResource | null> {
    try {
      return await this.service.deleteMiningResource({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          quantity: true,
          typeField: true,
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
