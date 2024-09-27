import React from 'react';
import { useLocation } from 'react-router-dom';

const Show3D = () => {
  const location = useLocation();
  const { element } = location.state || {};

  if (!element) {
    return <div>No element data available</div>;
  }

  return (
    <div>
      <h1>3D Model for {element.name} ({element.symbol})</h1>
      
      <p>This is where you would render a 3D model of the {element.name} atom.</p>
      <p>Atomic Number: {element.number}</p>
      <p>Category: {element.category}</p>
      
    </div>
  );
};

export default Show3D;