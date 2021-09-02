import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

class EditRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe: {
                name: "",
                description: "",
                time: "",
                course: "",
                cuisine: "",
                servings: ""
            },
            submitted: false
        }
    }

    /*
     * Set the state of the recipe to the current recipe
     */
    componentDidMount() {
        let { curr_recipe } = this.props 
        let { recipe } = this.state
        for (const key in curr_recipe) {
            recipe[key] = curr_recipe[key]
        }
        this.setState({ recipe: recipe })
    }

    /*
     * Handles changes to the text fields
     */
    handleChange = (e) => {
        let { recipe } = this.state
        recipe[e.target.name] = e.target.value
        this.setState({recipe: recipe})
    }

    /*
     * Handles recipe form submission and turns on submitted flag
     */
    handleSubmit = (e) => {
        this.props.createRecipe(this.state.recipe)
        this.setState({submitted: true})
    }

    render() {
        return(
            <>
            <h1>Edit Recipe</h1>
            
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.recipe.name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="text"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.recipe.description}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="time">Time</Label>
                    <Input
                        type="text"
                        name="time"
                        onChange={this.handleChange}
                        value={this.state.recipe.time}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="course">Course</Label>
                    <Input
                        type="text"
                        name="course"
                        onChange={this.handleChange}
                        value={this.state.recipe.course}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="cuisine">Cuisine</Label>
                    <Input
                        type="text"
                        name="cuisine"
                        onChange={this.handleChange}
                        value={this.state.recipe.cuisine}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="servings">Servings</Label>
                    <Input
                        type="text"
                        name="servings"
                        onChange={this.handleChange}
                        value={this.state.recipe.servings}
                    />
                </FormGroup>
                <Button name="submit" onClick={this.handleSubmit}>
                    Create Recipe
                </Button>
            </Form>

            {this.state.submitted && <Redirect to={`/recipeshow/${recipe.id}`} />}
            </>
        )
    }
}
export default EditRecipe