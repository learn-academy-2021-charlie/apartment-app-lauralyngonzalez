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
      


    end
  end


end
