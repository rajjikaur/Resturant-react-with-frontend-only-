import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dropdown() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/user.json") // public folder vich rakhi file
      .then((res) => res.json())
      .then((data) => {
        // extract unique categories from products
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error fetching user.json:", err));
  }, []);
const handleCategorySelect = (event) => {
    const selectedCategory = event.target.value;
    
    if (selectedCategory) {
        console.log("Selected Category:", selectedCategory);
      navigate(`/${selectedCategory}`);  // Go to CategoryPage.jsx
    }
  };
  return (
    <div className="dropdown-container">
      <select onChange={handleCategorySelect} >
        <option value="">Dropdown</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
