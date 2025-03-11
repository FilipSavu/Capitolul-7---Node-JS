// Selectăm toate elementele li cu clasa "item" din ul#categories
const categories = document.querySelectorAll('#categories .item');

// Afisam nr de categorii
console.log(`Number of categories: ${categories.length}`);

// Pentru fiecare categorie, obtinem titlul și numarul de elemente
categories.forEach(category => {
  // Extragem textul din tag-ul h2
  const title = category.querySelector('h2').textContent;
  // Numaram elem din lista interna (li din ul)
  const elementsCount = category.querySelector('ul').children.length;
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
