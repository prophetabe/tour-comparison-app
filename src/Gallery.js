import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery({ tours, setTours }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTours();
  }, [setTours]);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <div key={tour.id} className="tour">
          <img src={tour.image} alt={tour.name} />
          <div className="tour-info">
            <h4>{tour.name}</h4>
            <p>{tour.info}</p>
            <button onClick={() => removeTour(tour.id)}>Not Interested</button>
            {/* Add Read More/Show Less toggle functionality here */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;