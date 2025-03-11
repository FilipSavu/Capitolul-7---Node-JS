// Array cu lista de ingrediente
const ingredients = [
    "Cartofi",
    "Ciuperci",
    "usturoi",
    "Rosii",
    "Ardei",
  ];
  
  // selectam lista <ul> unde vor fi adaugate ingredientele
  const ingredientsList = document.querySelector("#ingredients");
  
  // cream toate elementele <li> 
  const listItems = ingredients.map(ingredient => {
      // doar un element <li>
      const li = document.createElement("li");
      // adaugam numele ingredientului ca text
      li.textContent = ingredient;
      // adaugam clasa "item"
      li.classList.add("item");
      return li;
  });
  
  // adaugam toate elementele <li> în <ul> 
  ingredientsList.append(...listItems);
  