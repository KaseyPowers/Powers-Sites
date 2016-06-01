// // Core components
// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// // reducers
// import weddingApp from './reducers'

// // main components
// import {NavContainer, MainContainer} from './components/containers'

// // import whats needed
// import './index.less'

// let store = createStore(weddingApp);

// // import App from './components/App'

// var root = document.createElement('div');
// document.body.appendChild(root);



// // let store = createStore(todoApp)

// import config from './config.js'

// render(
//   <Provider store={store}>
//     <NavContainer />
//     <MainContainer />
//   </Provider>,
//   root
// )

// Core components
import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

// import whats needed
import './index.less'
import './images'

import fonts from 'google-fonts'
fonts.add({
  'Great Vibes': true
});


// import App from './components/App'

var root = document.createElement('div');
document.body.appendChild(root);



// let store = createStore(todoApp)

import config from './config.js'

render(
  <App />,
  root
)