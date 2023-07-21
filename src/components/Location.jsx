{/* archivo Location.jsx dentro de carpeta components */}

import React from 'react'

function Location( {data, onCityClick } ) {
    const uniqueCities = {};
    const filteredData = data.filter(item => {
        if (uniqueCities[item.city]) {
            return false;
        } else {
            uniqueCities[item.city] = true;
            return true;
        }
    });

  return (
    <div>
    {filteredData.map(item => (
            <div key={item.city} onClick={()=> onCityClick(item.city)}>{item.city},{item.country}</div>
        ))}
    </div>
  );
}

export default Location
