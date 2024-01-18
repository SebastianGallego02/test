import React, { useState, useEffect } from 'react'
import '../stylesheets/CategorySelector.css'

export const CategorySelector = (props) => {

const [categories, setCategories] = useState([])

const { selectedValue, onChangeSelect } = props;

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
      <select className="form-select is-primary" required onChange={onChangeSelect} value={selectedValue} >
      <option defaultValue={'random-stuff'}>Category</option>
      {categories.map((category)=>(
        <option key={category.id} value={category.name}>{category.name}</option>
      ))}
      </select>
    </div>
  )
}
