import React from 'react'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
  return (
    <div className='text-center footer'>
    <footer className=' pt-3 badge bg-primary text-wrap' style={{width:'6rem', height:'3rem'}}>&copy; {year} <br /><a href="https://www.linkedin.com/in/yasinmm/" style={{color:"white"}}> Yasin M M</a></footer>
    </div>
  )
}

export default Footer