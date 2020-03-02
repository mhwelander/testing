"use strict";
/* import "reflect-metadata";
import {Resolver, Query, Mutation, Arg, Args, Authorized, Ctx } from "type-graphql"
import { Recipe, RecipesArgs, NewRecipeInput } from "./user.type";
import RecipeService from "./recipeservice"

@Resolver(Recipe)
class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(returns => Recipe)
  async recipe(@Arg("id") id: string) {
    const recipe = await this.recipeService.findbyID(id);
    if (recipe === undefined) {
      throw new Error("Something went wrong");
    }
    return recipe;
  }

  @Query(returns => [Recipe])
  recipes(@Args() { skip, take }: RecipesArgs) {
    return this.recipeService.findAll({ skip, take });
  }

  @Mutation(returns => Recipe)
  addRecipe(
    @Arg("newRecipeData") newRecipeData: NewRecipeInput
  ): Promise<Recipe> {
    return this.recipeService.addNew(data:newRecipeData);
  }

  @Mutation(returns => Boolean)
  async removeRecipe(@Arg("id") id: string) {
    try {
      await this.recipeService.removeById(id);
      return true;
    } catch {
      return false;
    }
  }
} */ 
