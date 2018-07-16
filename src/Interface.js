import React from 'react';

const Interface = props => (
  <form onSubmit={props.getData}>
    <input type="text" name="cityinput" placeholder="City"/>
    <button>Get forecast!</button>
  </form>
)

export default Interface;