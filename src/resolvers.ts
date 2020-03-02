import "reflect-metadata";
import { Resolver, Query, Mutation, Arg, Args, Authorized, Ctx, FieldResolver, Root } from "type-graphql"
import { Post, PostCreateInput } from "./post.type";
import { User, UserCreateInput } from "./user.type";
import { Context } from "./context";

@Resolver(User)
export class UserResolver {

  @FieldResolver()
  async posts(@Root() user: User, @Ctx() ctx: Context): Promise<Post[]> {
    return (await ctx.prisma.user.findOne({
      where: {
        id: user.id
      }
    }).post())!
  }

  @Query(returns => User)
  async user(@Arg("id") id: number, @Ctx() ctx: Context) {
    try {
      var user = await ctx.prisma.user.findOne({
        where:
          { id: id }
      });

      return user;
    }
    catch (error) {
      throw error;
    }
  }

}

@Resolver(Post)
export class PostResolver {

  @Query(returns => Post)
  async post(@Arg("id") id: number, @Ctx() ctx: Context) {
    try {
      var post = await ctx.prisma.post.findOne({
        where:
          { id: id }
      });

      return post;
    }
    catch (error) {
      throw error;
    }
  }


  @Query(returns => [Post])
  async filterPosts(@Arg("searchQuery") searchQuery: string, @Ctx() ctx: Context
  ) {
    try {
      var posts = await ctx.prisma.post.findMany({
        where: {
          OR: [
            { title: { contains: searchQuery } },
            { content: { contains: searchQuery } },
          ]
        }
      });

      return posts;
    }
    catch (error) {
      throw error;
    }
  }

  @FieldResolver()
  async author(@Root() post: Post, @Ctx() ctx: Context): Promise<User> {
    return (await ctx.prisma.post.findOne({
      where: {
        id: post.id
      }
    }).author())!;
  }


  @Query(returns => [Post])
  async feed(@Ctx() ctx: Context) {
    try {
      var posts = await ctx.prisma.post.findMany({
        where: {
          published: true
        }
      });

      return posts;
    }
    catch (error) {
      throw error;
    }
  }


  @Mutation(returns => Post)
  async createDraft(
    @Arg("newPostData") newPostData: PostCreateInput, @Ctx() ctx: Context
  ): Promise<Post> {
    try {
      return await ctx.prisma.post.create({
        data: {
          title: newPostData.title,
          content: newPostData.content,
          author: {
            connect: { email: newPostData.email }
          }
        }
      });
    }
    catch (error) {
      throw error;
    }
  }

  @Mutation(returns => Post)
  async publish(
    @Arg("id") id: number, @Ctx() ctx: Context
  ): Promise<Post> {
    try {
      return await ctx.prisma.post.update({
        where: {
          id: id
        },
        data: {
          published: true
        }
      });
    }
    catch (error) {
      throw error;
    }
  }

  @Mutation(returns => Post)
  async deleteOnePost(@Arg("id") id: number, @Ctx() ctx: Context): Promise<Post> {
    try {
      return await ctx.prisma.post.delete({
        where: {
          id: id
        }
      });
    }
    catch (error) {
      throw error;
    }
  }

  @Mutation(returns => User)
  async signUpUser(@Arg("userCreateInput") userCreateInput: UserCreateInput, @Ctx() ctx: Context): Promise<User> {
    try {
      return await ctx.prisma.user.create({
        data: {
          email: userCreateInput.email,
          name: userCreateInput.name
        }
      });
    }
    catch (error) {
      throw error;
    }
  }
}