import React from 'react';
import { useState } from 'react';

const Testimonial = () => {
    const [currentIndex, setIndex] = useState('0')
    const testimonials = [
        {
            quote : 'product was nice',
            author : 'jhon'
        },
        {
            quote : 'good product',
            author : 'surya'
        },
        {
            quote : 'good experience',
            author : 'karthik'
        }
    ]
   const handlenext = () =>
   {
    setIndex((currentIndex + 1) % testimonials.length)
   }
   const handleprev = () =>
   {
    setIndex((currentIndex - 1) % testimonials.length)
   }
  return (
    <div>
     
      <div className="content">
        {testimonials[currentIndex].quote}
      </div>
      <div className="author">
        - {testimonials[currentIndex].author}
      </div>
      <button className="prev" onClick={handleprev}>prev</button>
      <button className="next" onClick={handlenext}>next</button>
    </div>
  );
}

export default Testimonial;
