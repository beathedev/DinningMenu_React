import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
 
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <div className="app__wrapper_img">
          <SubHeading />
          <h1 className='app__header-h1'>The Key to Fine Dining</h1>
          <p className='p__opensans' style={{margin: '2rem 0'}}>Lorem ipsum dolornt, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button type='button' className='custom__button'>Explore Menu</button>
      </div>
    </div>
    <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
