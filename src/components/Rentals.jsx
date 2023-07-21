/* archivo Rental.jsx en carpeta components */

import React from 'react'
import rentals from '../../stays.json'
import Card from './Card';



function Rentals({ data, selectedCity }) {
  const filteredData = selectedCity
  ? data.filter((item) => item.city === selectedCity)
  : data;

  return (
    <div className="pt-3 sm:pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredData.map((stay) => (
                <Card
                key={stay.city}
                title={stay.title}
                photo={stay.photo}
                rating={stay.rating}
                type={stay.type}
                beds={stay.beds}
                superhost={stay.superhost}
                />
            ))}
        </div>
    </div>
  );
};

export default Rentals;
