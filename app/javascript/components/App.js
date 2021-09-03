import React, { Component } from "react"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Recipes from './pages/Recipes'
import Recipe from './pages/Recipe'
import NewRecipe from './pages/NewRecipe'
import EditRecipe from './pages/EditRecipe'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      ingredients: []
    }
  }

  componentDidMount() {
    this.readRecipe()
    this.readIngredients()
  }

  /*
   * Gets all recipes from the DB and saves it to state.
   */
  readRecipe = () => {
    fetch("/recipes")
      .then(response => response.json())
      .then(recipes => this.setState({ recipes: recipes }))
      .catch(errors => console.log("Recipe read errors:", errors))
  }

  readIngredients = () => {
    fetch("/ingredients")
      .then(response => response.json())
      .then(ingredients => this.setState({ ingredients: ingredients }))
      .catch(errors => console.log("Ingredients read errors:", errors))
  }

  /*
   * Creates the recipe via a POST request to the DB.
   * A recipe requires a user_id which we get from the current user.
   */
  createRecipe = (newRecipe) => {
    newRecipe["user_id"] = this.props.current_user.id
    fetch("/recipes", {
      body: JSON.stringify(newRecipe),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => this.readRecipe())
      .catch(errors => console.log("Recipe create errors:", errors))
  }

  updateRecipe = (recipe) => {
    fetch(`/recipes/${recipe.id}`, {
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json())
      .then(payload => this.readRecipe())
      .catch(errors => console.log("Recipe update errors:", errors))
  }

  deleteRecipe = (recipe) => {
    fetch(`/recipes/${recipe.id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(payload => this.readRecipe())
      .catch(errors => console.log("Recipe delete errors:", errors))
  }

  render () {
    const {
      current_user,
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <>
        <Router>
          <Header
            logged_in={logged_in}
            sign_out_route={sign_out_route}
            sign_in_route={sign_in_route}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipeindex"
              render={ (props) => <Recipes recipes={ this.state.recipes } /> } />
            <Route path="/recipeshow/:id"
              render={ (props) => {
                const id = props.match.params.id
                const recipe = this.state.recipes.find(recipe => recipe.id === +id)
                const ingredients = this.state.ingredients.filter(ingredient => ingredient.recipe_id === +id)
                return (
                  <Recipe
                  recipe={recipe}
                  ingredients={ingredients}
                  current_user={current_user}
                  deleteRecipe={this.deleteRecipe}/>
                )}} />
            <Route path="/recipenew"
              render={ (props) => <NewRecipe createRecipe={this.createRecipe}/>} />
            <Route path="/recipeedit/:id"
              render={ (props) => {
                const id = props.match.params.id
                const recipe = this.state.recipes.find(recipe => recipe.id === +id)
                return <EditRecipe curr_recipe={recipe} updateRecipe={this.updateRecipe}/>
              }} />
            <Route component={ NotFound } />
          </Switch>
        </Router>
      
      </>
    )
  }
}

export default App
