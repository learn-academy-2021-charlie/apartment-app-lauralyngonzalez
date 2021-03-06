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

      # add the previously created user to recipe_params
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

      post recipes_path, params: recipe_params

      expect(response).to have_http_status(200)
      recipe = Recipe.first
      expect(recipe.name).to eq 'Avocado Toast with Egg'
      expect(recipe.servings).to eq 1
      expect(recipe.time).to eq 10
    end
  end

  describe "PATCH /update" do
    it "updates a recipe" do
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
      user.recipes.create(
        name: 'Avocado Toast on sourdough bread',
        description: 'A delightful brunch item',
        time: 5,
        course: 'brunch',
        cuisine: 'American',
        servings: 2
      )

      updated_recipe_params = {
        recipe: {
          name: 'Ultimate Avocado Toast',
          description: 'A delightful brunch item for the whole family',
          time: 20,
          course: 'brunch',
          cuisine: 'American',
          servings: 4
        }
      }

      recipe = Recipe.first
      
      patch "#{recipes_path}/#{recipe.id}", params: updated_recipe_params

      updated_recipe = Recipe.find(recipe.id)

      expect(response).to have_http_status(200)
      expect(updated_recipe.name).to eq 'Ultimate Avocado Toast'
      expect(updated_recipe.time).to eq 20
      expect(updated_recipe.course).to eq 'brunch'
      expect(updated_recipe.servings).to eq 4

      other_recipe = Recipe.second

      expect(other_recipe.name).to eq 'Avocado Toast on sourdough bread'
    end
  end

  describe "DELETE /delete" do
    it "deletes a recipe that belongs to the user" do
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
      user.recipes.create(
        name: 'Avocado Toast on multigrain bread',
        description: 'A healthy and delightful brunch item',
        time: 5,
        course: 'brunch',
        cuisine: 'American',
        servings: 2
      )

      recipe = Recipe.first

      delete "#{recipes_path}/#{recipe.id}"

      expect(response).to have_http_status(200)
      expect(Recipe.all.length).to eq 1
    end
  end

end
