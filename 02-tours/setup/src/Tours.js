import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>WELCOME TO DANIEKEYS TOURS</h2>
        
      </div>
      <div>
        {tours.map((tour)=> {
          return (
            <Tour key={tour.id} {...tour} removeTour={removeTour} >

            </Tour>
          )
        })}
      </div>
    </section>
  );
};

export default Tours;
