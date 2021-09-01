import React, { Component } from "react"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Recipes from './pages/Recipes'
import Recipe from './pages/Recipe'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    this.readRecipe()
  }

  readRecipe = () => {
    fetch("http://localhost:3000/recipes")
      .then(response => response.json())
      .then(recipes => this.setState({ recipes: recipes }))
      .catch(errors => console.log("Recipe read errors:", errors))
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
                return <Recipe recipe={recipe} />
              }} />
            <Route component={ NotFound } />
          </Switch>
        </Router>
      
      </>
    )
  }
}

export default App
