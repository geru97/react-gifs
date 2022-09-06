import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

  }

  return (
    <>

      <h1>Gif Expert App</h1>

      <AddCategory
        
        onNewCategory={(value) => onAddCategory(value)}
        currentCategories={categories}
      />

      {
        categories.map((category) => (
          <GifGrid key={category}
            category={category}
          />))
      }
      <footer>
      <p>Hecho por <a href="https://linkedin.com/in/gerardoruizandrade" target="_blank">Gerado Ruiz</a></p>
    </footer>
    </>
  )
}
