import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Category() {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/user.json")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(item => item.category === categoryName);
        setItems(filtered);
      });
  }, [categoryName]);

  return (
    <div className="category-page">
      <h2>{categoryName} Menu</h2>
      <div className="item-list">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <img src={`./${item.image}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
