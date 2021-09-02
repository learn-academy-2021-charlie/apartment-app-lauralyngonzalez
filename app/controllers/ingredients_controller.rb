class IngredientsController < ApplicationController

    def index
        ingredients = Ingredients.all
        render json: ingredients
    end

    

end
