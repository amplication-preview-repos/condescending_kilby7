/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BiomeWhereInput } from "./BiomeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BiomeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BiomeWhereInput,
  })
  @ValidateNested()
  @Type(() => BiomeWhereInput)
  @IsOptional()
  @Field(() => BiomeWhereInput, {
    nullable: true,
  })
  every?: BiomeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BiomeWhereInput,
  })
  @ValidateNested()
  @Type(() => BiomeWhereInput)
  @IsOptional()
  @Field(() => BiomeWhereInput, {
    nullable: true,
  })
  some?: BiomeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BiomeWhereInput,
  })
  @ValidateNested()
  @Type(() => BiomeWhereInput)
  @IsOptional()
  @Field(() => BiomeWhereInput, {
    nullable: true,
  })
  none?: BiomeWhereInput;
}
export { BiomeListRelationFilter as BiomeListRelationFilter };
