import React from "react"

class App extends React.Component {
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
      </>
    )
  }
}

export default App
