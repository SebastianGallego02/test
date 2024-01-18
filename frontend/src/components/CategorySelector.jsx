import React, { useState, useEffect } from 'react'
import '../stylesheets/CategorySelector.css'

export const CategorySelector = () => {

const [categories, setCategories] = useState([])
const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const fetchData = async ()=>{
      try{
          const response = await fetch('http://localhost:3000/api/v1/categories');
          const jsonData = await response.json();
          console.log(jsonData)
          setCategories(jsonData)
          console.log(categories)
      }
      catch(e){
          console.log(e)
      }
  }

  useEffect(()=>{
      fetchData()
  }, [])
    
  return (
    <div>
      <select className="form-select" aria-label="Default select example" required onChange={handleChange} value={selectedValue} >
      <option selected>Category</option>
      {categories.map((category)=>(
        <option value={category.id}>{category.name}</option>
      ))}
      </select>
    </div>
  )
}
