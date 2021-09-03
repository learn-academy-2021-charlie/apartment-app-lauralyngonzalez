import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Recipes extends Component {
    render() {
        const { recipes, isMyRecipes } = this.props
        return(
            <>
            {isMyRecipes && <h1>My Recipes</h1>}
            {!isMyRecipes && <h1>Recipes</h1>}
            {recipes && recipes.map( recipe => {
                return (
                    <div key={recipe.id}>
                    <NavLink to={`/recipeshow/${recipe.id}`}>
                        <h4>{recipe.name}</h4>
                    </NavLink>
                    <p>
                        time: {recipe.time},
                        course: {recipe.course},
                        cuisine: {recipe.cuisine},
                        servings: {recipe.servings}
                    </p>
                    </div>
                )
            })}
            </>
        )
    }
}
export default Recipes