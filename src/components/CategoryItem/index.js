import React from 'react';

import './styles.css';

function CategoryItem({ title, subtitle, image }) {
  return (
    <section className="category-item">
      <div className="info">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <img src={image} alt={title}/>
    </section>
  );
}

export default CategoryItem;