import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'

// Styles
import './stylesheets/style.scss'

// Components
import HomeLayout from './components/home'
import StepOne from './components/step-one'
import StepTwo from './components/step-two'
import StepThree from './components/step-three'

// Store
let store = createStore(rootReducer)

const App = props => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={HomeLayout} />
      </Switch>
    </Router>
  </Provider>
)

// Render
render(
  <App />,
  document.getElementById('root'),
  function(){
    let loader = document.getElementById('app-loader');
    loader.parentNode.removeChild(loader);
  }
)
