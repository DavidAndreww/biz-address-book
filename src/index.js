import React from 'react'
import ReactDom from 'react-dom'

const root = document.querySelector('#root')

const App = () => {
  return (
    <h1>React from scratch!</h1>
  )
}

ReactDom.render(<App />, root)
