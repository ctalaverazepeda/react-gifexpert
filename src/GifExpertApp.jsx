import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    // categories.push("Valorant");
    // console.log('test');
    // setCategories([...categories, 'Valorant']);
    if(categories.includes(newCategory)) return;
    setCategories(cat => [newCategory, ...cat]);
    // console.log(newCategory);

  };

  // console.log(categories);
  return (
    <>
      {/* Titulo */}
      <h2>GifExpertApp</h2>

      <AddCategory 
      // setCategories = { setCategories }
      onNewCategory = { event => onAddCategory(event)}  />
      {/* Input */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* Listado de items */}
        {
        categories.map((category) => (
            // <div key={category}>
            //   <li>{category}</li>
            // </div>
            <GifGrid key={category} category = {category} />
        ))
        }
    </>
  );
};
