import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

class NewRecipe extends Component {
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
            <h1>Create a New Recipe</h1>
            
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

            {this.state.submitted && <Redirect to="/recipeindex" />}
            </>
        )
    }
}
export default NewRecipe