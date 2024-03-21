import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <header><h1 className='header'>Bradley's Bookstore</h1></header>
      <div>
        <h2 className='contactUs'>Contact Us</h2>
        <p style={{fontSize: '30px', lineHeight: '1.5'}}>
          1313 Mockingbird Lane<br />
          Hays, KS 67601<br />
          785-628-FHSU<br />
          BradBooks@gmail.com
        </p>
      </div>
      <footer className='footer'><medium><i>Bradley's Bookstore &copy; 2024 Bradley's Bookstore, Inc.</i></medium></footer>
    </div>
  )
}

export default About