import "reflect-metadata";
import * as tq from "type-graphql"
import * as cv from "class-validator"
import { Post } from "./post.type"

@tq.ObjectType()
export default class User {
  @tq.Field(type => tq.ID)
  id: number;

  @tq.Field()
  @cv.IsEmail()
  email: string;

  @tq.Field({ nullable: true })
  name: string; 

  @tq.Field(type => [Post])
  posts: Post[];
}

@tq.InputType()
export class UserCreateInput {

  @tq.Field()
  @cv.IsEmail()  
  email: string;

  @tq.Field(type => String, { nullable: true })
  name?: string | null; 

}