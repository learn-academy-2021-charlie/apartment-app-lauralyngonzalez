import React, { Component } from "react"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Recipes from './pages/Recipes'
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
        <h1>Welcome!</h1>
        { logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={sign_in_route}>Sign in</a>
          </div>
        }

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipeindex"
              render={ (props) => <Recipes recipes={ this.state.recipes } /> } />
            <Route component={ NotFound } />
          </Switch>
        </Router>
      
      </>
    )
  }
}

export default App
