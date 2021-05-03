import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  // we created a function so filter out the one with the corresponding id and leave the remaining
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }
  const fetchTours = async () => {
    setLoading(true);
   try {
     
     const response = await fetch(url);
     const tours = await response.json();
     setLoading(false);
     setTours(tours);
   } catch (error) {
     setLoading(false);
     console.log(error);
   }
    
  }
  useEffect(()=> {
    fetchTours();
  }, []);
  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={fetchTours}>Reload tours</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      {/* we just need to passs in the remove tour as an property to the other children */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
    
  ) 
}

export default App
