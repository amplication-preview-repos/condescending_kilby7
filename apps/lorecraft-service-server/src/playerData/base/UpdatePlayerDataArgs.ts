/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlayerDataWhereUniqueInput } from "./PlayerDataWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PlayerDataUpdateInput } from "./PlayerDataUpdateInput";

@ArgsType()
class UpdatePlayerDataArgs {
  @ApiProperty({
    required: true,
    type: () => PlayerDataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlayerDataWhereUniqueInput)
  @Field(() => PlayerDataWhereUniqueInput, { nullable: false })
  where!: PlayerDataWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PlayerDataUpdateInput,
  })
  @ValidateNested()
  @Type(() => PlayerDataUpdateInput)
  @Field(() => PlayerDataUpdateInput, { nullable: false })
  data!: PlayerDataUpdateInput;
}

export { UpdatePlayerDataArgs as UpdatePlayerDataArgs };
