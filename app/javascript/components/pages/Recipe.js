import React, { Component } from "react"
import { NavLink } from 'react-router-dom'

class Recipe extends Component {
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
            <NavLink to={`/recipeedit/${recipe.id}`}>
                <h4>Edit</h4>
            </NavLink>
            }

            </>
        )
    }
}
export default Recipe