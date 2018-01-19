import React from 'react'
import './Root.scss'

function getMessage() {
  return 'Hello World!';
}

export default () => (
  <div>
    <h1 className="hello">{getMessage()}</h1>
    <div>Hello React Hot Loader</div>
  </div>
)