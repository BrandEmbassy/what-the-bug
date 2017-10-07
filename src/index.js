import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import WhatTheBug from './WhatTheBug'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <WhatTheBug />,
  document.getElementById('root')
)
registerServiceWorker()
