require 'rails_helper'

RSpec.describe "Recipes", type: :request do

  describe "GET /index" do
    it "gets a list of recipes" do
      User.create(
        email: 'test@test.com',
        password: 'test123'
      )

      user = User.first
      user.recipes.create(
        name: 'Avocado Toast',
        description: 'A delightful brunch item',
        time: 5,
        course: 'brunch',
        cuisine: 'American',
        servings: 2
      )

      get recipes_path

      expect(response).to have_http_status(200)
      recipe = JSON.parse(response.body)
      expect(recipe.length).to eq 1
    end
  end

  describe "POST /create" do
    it "creates a recipe" do
      User.create(
        email: 'test@test.com',
        password: 'test123'
      )

      user = User.first

      recipe_params = {
        recipe: {
          name: 'Avocado Toast with Egg',
          description: 'A delightful and filling brunch item',
          time: 10,
          course: 'brunch',
          cuisine: 'American',
          servings: 1,
          user_id: user.id
        }
      }

      # not using user to create right now!!! WARNING
      post recipes_path, params: recipe_params

      expect(response).to have_http_status(200)
      recipe = Recipe.first
      expect(recipe.name).to eq 'Avocado Toast with Egg'
      expect(recipe.servings).to eq 1
      expect(recipe.time).to eq 10
    end
  end

end
