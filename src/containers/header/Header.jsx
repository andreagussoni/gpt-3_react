import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>
            Let's build something amazing with GPT-3
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, consectetur? Molestias aliquam perferendis similique repellendus accusamus? Laboriosam possimus error itaque dolores magnam impedit, qui quae aspernatur, dignissimos ut facilis molestias!</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Your email'></input>
            <button type='button'>Get started</button>
          </div>
        <div className='gpt3__header-content__people'>
          <img src={people}/>
          <p>1,600,000 people have requested acess</p>
        </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header