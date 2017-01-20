import React from 'react';

class Footer extends React.Component {

  render(){
    return(
      <section className='footer'>
        <a href='https://github.com/dankim93'>
          <img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' />
        </a>
        <a href='https://www.linkedin.com/in/dankim93'>
          <img className= 'linkedin' src='https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300' />
        </a>
      </section>
    );
  }
}

export default Footer;
