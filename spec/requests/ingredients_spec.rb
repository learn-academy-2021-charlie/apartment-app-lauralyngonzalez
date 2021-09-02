require 'rails_helper'

RSpec.describe "Ingredients", type: :request do

  describe "GET /index" do
    it "gets all ingredients" do
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

      recipe = user.recipes.first
      recipe.ingredients.create(
        name: 'avocado'
      )
      recipe.ingredients.create(
        name: 'bread'
      )

      get ingredients_path
      expect(response).to have_http_status(200)
      recipe = JSON.parse(response.body)
      expect(recipe.length).to eq 2

    end
  end

  describe "POST /create" do
    it "creates an ingredient" do
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

      recipe = user.recipes.first
      ingredient_params = {
        ingredient: {
          name: 'avocado',
          recipe_id: recipe.id
        }
      }

      post ingredients_path, params: ingredient_params
      expect(response).to have_http_status(200)
      expect(Ingredient.all.length).to eq 1
      expect(Ingredient.first.name).to eq 'avocado'
    end
  end

  describe "PATCH /update" do
    it "updates an ingredient" do
      User.create(
        email: 'test@test.com',
        password: 'test123'
      )

      user = User.first
      user.recipes.create(
        name: 'Tomato Toast',
        description: 'A weird brunch item',
        time: 5,
        course: 'brunch',
        cuisine: 'American',
        servings: 2
      )

      recipe = user.recipes.first
      recipe.ingredients.create(
        name: 'avocado'
      )

      updated_ingredient_params = {
        ingredient: {
          name: 'tomato'
        }
      }

      ingredient = Ingredient.first
      patch "#{ingredients_path}/#{ingredient.id}", params: updated_ingredient_params
      expect(response).to have_http_status(200)
      expect(Ingredient.all.length).to eq 1
      expect(Ingredient.first.name).to eq 'tomato'
    end
  end

  describe "DELETE /delete" do
    it "deletes an ingredient" do
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

      recipe = Recipe.first
      recipe.ingredients.create(
        name: 'avocado'
      )
      recipe.ingredients.create(
        name: 'bread'
      )

      ingredient = Ingredient.first

      delete "#{ingredients_path}/#{ingredient.id}"

      expect(response).to have_http_status(200)
      expect(Ingredient.all.length).to eq 1
      expect(Ingredient.first.name).to eq 'bread'
    end
  end
  

end
