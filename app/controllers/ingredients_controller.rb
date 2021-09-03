class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all
        render json: ingredients
    end

    def create
        recipe = Recipe.find(params[:ingredient][:recipe_id])
        ingredient = recipe.ingredients.create(ingredient_params)
        if recipe.valid?
            render json: recipe
        else
            render json: recipe.errors, status:422
        end
    end

    def update
        ingredient = Ingredient.find(params[:id])
        ingredient.update(ingredient_params)
        if ingredient.valid?
            render json: ingredient
        else
            render json: ingredient.errors, status:422
        end
    end

    def destroy
        ingredient = Ingredient.find(params[:id])
        ingredient.destroy
        render json: ingredient
    end

    private
    def ingredient_params
        params.require(:ingredient).permit(:name)
    end

end
