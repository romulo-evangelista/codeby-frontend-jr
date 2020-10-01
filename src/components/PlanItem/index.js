import React from 'react';

import './styles.css';

function PlanItem({ price, hours, description, height }) {
  // Height defined in component props
  const heightPassed = { height };
  
  return (
    <section className="plan-item" style={heightPassed}>
      <div className="price-hours">
        <span className="price">$ {price}</span>
        <span className="hours">{hours}</span>
      </div>
      <p>{description}</p>
    </section>
  );
}

export default PlanItem;