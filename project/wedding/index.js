// Core components
import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

// import whats needed
import './index.less'
import './images'

var root = document.createElement('div');
document.body.appendChild(root);


render(
  <App />,
  root
)