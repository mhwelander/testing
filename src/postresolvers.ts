import "reflect-metadata";
import { Resolver, Query, Mutation, Arg, Args, Authorized, Ctx } from "type-graphql"
import { PrismaClient } from '@prisma/client'
import { Service } from "typedi"
import { Post, PostCreateInput } from "./post.type";

@Service()
@Resolver(Post)
export class PostResolver {
  constructor(private prismaClient: PrismaClient) { }

  @Query(returns => Post)
  async post(@Arg("id") id: number) {
    try {
      var post = await this.prismaClient.post.findOne({
        where:
          { id: id }
      });

      return post;
    }
    catch (error) {
      throw error;
    }
    finally {
      await this.prismaClient.disconnect(); // QUESTION: Required?
    }
  }

  @Mutation(returns => Post)
  async addPost(
    @Arg("newPostData") newPostData: PostCreateInput
  ): Promise<Post> {
    try {
      return await this.prismaClient.post.create({
        data: {
          title: newPostData.title,
          content: newPostData.content
        }
      });
    }
    catch (error) {
      throw error;
    }
    finally {
      await this.prismaClient.disconnect(); // QUESTION: Required?
    }
  }

  /* @Query(returns => [Recipe])
  recipes(@Args() { skip, take }: RecipesArgs) {
    return this.recipeService.findAll({ skip, take });
  }



  @Mutation(returns => Boolean)
  async removeRecipe(@Arg("id") id: string) {
    try {
      await this.recipeService.removeById(id);
      return true;
    } catch {
      return false;
    }
  } */
}