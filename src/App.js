import React from 'react';
import './App.css';




const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_DFX8048_2280x819_Q40_wm_mini-1726x819__.jpg' />
        </div>
        <div>
          <img src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png' />
        </div>
        <div>
          My posts
          <div>
            New Posts
          </div>
          <div>
            post 1
          </div>
          <div>
            post2
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
