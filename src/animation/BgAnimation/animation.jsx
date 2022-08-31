import React from 'react';
import './style.css';
import { Wrapper } from '../../layout';

const Animation = () => {
  return (
    <Wrapper>
    <div className='loader' >
        <span className='--i:7' ></span>
        <span className='--i:6' ></span>
        <span className='--i:5' ></span>
        <span className='--i:4' ></span>
        <span className='--i:3' ></span>
        <span className='--i:2' ></span>
        <span className='--i:1' ></span>
    </div>
</Wrapper>
  )
}

export default Animation;