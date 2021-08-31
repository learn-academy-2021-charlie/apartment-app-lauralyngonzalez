users = [
  {
    email: 'testing@test.com',
    password: 'testing123',
    password_confirmation: 'testing123'
  }
]

users.each do |attribute|
  User.create attribute
end

recipes = [
  {
    name: 'Kung Pao Spaghetti',
    description: 'Copycat recipe from CPK',
    time: 30,
    course: 'dinner',
    cuisine: 'Asian-inspired', 
    servings: 4
  }
]

ingredients = [
  {
    name: 'spaghetti'
  },
  {
    name: 'vegetable oil'
  },
  {
    name: 'garlic'
  },
  {
    name: 'green onions'
  },
  {
    name: 'soy sauce'
  },
  {
    name: 'sesame oil'
  }  
]

user = User.where(email: 'testing@test.com').first

recipes.each do |attribute|
  user.recipes.create attribute
end

recipe = user.recipes.first

ingredients.each do |attribute|
  recipe.ingredients.create attribute
end
