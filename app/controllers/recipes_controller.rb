class RecipesController < ApplicationController

    def index
        recipes = Recipe.all
        render json: recipes
    end

    def create
        user = User.find(params[:recipe][:user_id])
        recipe = user.recipes.create(recipe_params)
        if recipe.valid?
            render json: recipe
        else
            render json: recipe.errors, status:422
        end
    end

    def update
        recipe = Recipe.find_by(user_id: params[:recipe][:user_id], id: params[:id])
        recipe.update(recipe_params)
        if recipe.valid?
            render json: recipe
        else
            render json: recipe.errors, status:422
        end
    end

    private
    def recipe_params
        params.require(:recipe).permit(:name, :description, :time, :course, :cuisine, :servings)
    end
    
end
