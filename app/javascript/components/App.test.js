import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'


Enzyme.configure({ adapter: new Adapter() })

describe('When the app renders', () => {
    // it('displays a header and a footer', () => {
    //     // arrange
    //     const renderedApp = shallow(<App />)
    //     // act
    //     const renderedHeader = renderedApp.find("Header")
    //     const renderedFooter = renderedApp.find("Footer")
    //     // assert
    //     expect(renderedHeader.length).toEqual(1)
    //     expect(renderedFooter.length).toEqual(1)
    // })

    // it('provides a route "/" to the home component', () => {
    //     const renderedApp = shallow(<App />)
    //     const renderedHomeRoute = renderedApp.find('[path="/"]')
    //     expect(renderedHomeRoute.props().component).toEqual(Home)
    // })

})