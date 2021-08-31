import React, { Component } from "react"

class Recipes extends Component {
    render() {
        return(
            <>
            <h1>Recipes</h1>

            {this.props.recipes && this.props.recipes.map( recipe => {
                return (
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
                )
            })}
            </>
        )
    }
}
export default Recipes