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
        description: 'A delightful brunch item', time: 5,
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
end
