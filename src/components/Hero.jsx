import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      
      <h1 className='head_text'>
        <span className='orange_gradient'>Summarize Articles  <br className='max-md:hidden'/></span>
        <span className='black_gradient'>with Ease</span>
      </h1>
      <h2 className='desc'>
          Simplify your reading with <b>SummarEasee (or Sumz for short)</b>, an article summarizer that transforms lengthy articles into clear and concise summaries!!
      </h2>

    </header>
  )
}

export default Hero