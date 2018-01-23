import React from 'react'
import style from './Root.scss'

function getMessage() {
  return 'Hello World!';
}

export default () => (
  <div>
    <h1 className={style.hello}>{getMessage()}</h1>
    <div>Hello React Hot Loader</div>
  </div>
)