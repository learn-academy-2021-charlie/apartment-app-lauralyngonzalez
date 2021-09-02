import React, { Component } from "react"
import { NavLink, Redirect } from 'react-router-dom'
import { Button } from 'reactstrap'

class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: false
        }
    }

    /*
     * Handles button for deleting a recipe
     */
    handleSubmit = (e) => {
        this.props.deleteRecipe(this.props.recipe)
        this.setState({ submitted: true })
    }

    render() {
        const { recipe, current_user } = this.props
        return(
            <>
            <h1>Recipe</h1>

            <div key={recipe.id}>
            <h4>{recipe.name}</h4>
            <p>
                time: {recipe.time},
                course: {recipe.course},
                cuisine: {recipe.cuisine},
                servings: {recipe.servings}
            </p>
            <p>{recipe.description}</p>
            </div>

            {current_user && current_user.id === recipe.user_id && 
            <>
            <NavLink to={`/recipeedit/${recipe.id}`}>
                <h4>Edit</h4>
            </NavLink>
            <Button onClick={this.handleSubmit}>Delete</Button>
            </>
            }

            {this.state.submitted && <Redirect to="/recipeindex" />}
            </>
        )
    }
}
export default Recipe