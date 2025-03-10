// 4. Gestionarea erorilor la parsare
try {
    console.logg("Aceasta este o eroare intenționată"); // scriem o greseala intentionat
} catch (error) {
    console.log("Eroare catched:", error.message);
}
