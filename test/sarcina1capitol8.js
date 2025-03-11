// Selectăm toate elementele li cu clasa "item" din ul#categories
const categories = document.querySelectorAll('#categories .item');

// Afișăm numărul de categorii
console.log(`Number of categories: ${categories.length}`);

// Pentru fiecare categorie, obținem titlul și numărul de elemente din lista internă
categories.forEach(category => {
  // Extragem textul din tag-ul <h2>
  const title = category.querySelector('h2').textContent;
  // Numărăm elementele din lista internă (li din ul)
  const elementsCount = category.querySelector('ul').children.length;
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
