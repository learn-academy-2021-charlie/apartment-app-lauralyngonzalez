import React, { Component } from "react"

class Recipe extends Component {
    render() {
        const { recipe } = this.props
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
             
            </>
        )
    }
}
export default Recipe