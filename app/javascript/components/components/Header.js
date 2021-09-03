import React, { Component } from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'

class Header extends Component {

    render() {
        const {
            logged_in,
            sign_in_route,
            sign_out_route
        } = this.props
        
        return(
            <>
            <Nav>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/recipeindex">Recipes</NavLink>
                </NavItem>
                { !logged_in && 
                <NavItem>
                    <NavLink href={sign_in_route}>Sign in</NavLink>
                </NavItem>
                }
                { logged_in && 
                <NavItem>
                    <NavLink href={sign_out_route}>Sign out</NavLink>
                </NavItem>
                }
            </Nav>

            { logged_in &&
            <Nav>
                <NavItem>
                    <NavLink href="/myrecipes">My Recipes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/recipenew">Create a New Recipe</NavLink>
                </NavItem>
            </Nav>
            }
            </>
        )
    }
}
export default Header