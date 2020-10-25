import React from 'react'
import ReactDom from 'react-dom'

const root = document.querySelector('#root')

const App = () => {
  return (
    <div>
      <h1>Small-Biz App!</h1>
      <p>Track <b>ALL</b> of your favorite business contacts in one place.</p>
    </div>
  )
}

ReactDom.render(<App />, root)
