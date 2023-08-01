import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access</h4>
        <h1 className="gradient__text">The possibilities are beyonnd imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laboriosam tempora consectetur sunt ratione earum quam dolore, iste suscipit illo sequi ex alias nisi obcaecati ipsa, adipisci culpa repudiandae non!</p>
        <h4>Request early access</h4>
      </div>
    </div>
  )
}

export default Possibility