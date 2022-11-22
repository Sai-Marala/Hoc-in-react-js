import React from 'react'
import Hoc from './Hoc';

const App=(props)=> {
  return (
    <div>
      <h1>Hello welcome to Tuplescale {props.name}</h1>
    </div>
  )
}

export default Hoc(App);
