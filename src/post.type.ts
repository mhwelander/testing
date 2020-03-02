import "reflect-metadata";
import * as tq from "type-graphql"
import * as cv from "class-validator"
import User from "./user.type"

@tq.ObjectType()
export class Post {
  @tq.Field(type => tq.ID) // Auto-generated
  id: number;

  @tq.Field()  
  title: string;

  // From docs: We should be aware that when we declare our type as a nullable union (e.g. string | null), we need to explicitly provide the type to the @Field decorator.

  @tq.Field(type => String, { nullable: true })  
  content: string | null;

  @tq.Field(type => Boolean, { nullable: true })
  published?: boolean | null;  

  @tq.Field(type => User, {nullable: true})
  author?: User;
}

@tq.InputType()
export class PostCreateInput {

  @tq.Field()  
  title: string;

  @tq.Field(type => String, { nullable: true })  
  content: string | null;

  @tq.Field(type => Boolean, { nullable: true })
  published?: boolean | null = false; // Defaults to false

  @tq.Field()
  @cv.IsEmail() // 
  email: string;
  
  // TODO: Add user -- via e-mail?
}