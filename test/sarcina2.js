// 2. Convertire obiect JavaScript în JSON
const fruct = {
    nume: "mar",
    culoare: "rosu",
    greutate: 150,
    esteComestibil: true
};

const fructJson = JSON.stringify(fruct);
console.log("Obiect convertit în JSON:", fructJson);