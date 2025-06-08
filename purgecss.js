const purgecss = require("purgecss");
const fs = require("fs");

// Fichiers à analyser
const contentFiles = [
  "./index.html",
  "./assets/scripts.js",
  "./assets/maugallery.js",
];

// Le fichier CSS à purger
const cssFile = "./assets/bootstrap/bootstrap.css";

// Créer une purge PurgeCSS
const purge = new purgecss.PurgeCSS();

// Exécuter la purge
purge
  .purge({
    content: contentFiles, // Analyser ces fichiers pour détecter les classes utilisées
    css: [cssFile], // Le fichier CSS à purger
  })
  .then((result) => {
    // Sauvegarder le CSS purgé dans un nouveau fichier
    fs.writeFile(
      "./assets/bootstrap/bootstrap.purged.css",
      result[0].css,
      (err) => {
        if (err) {
          console.error("Erreur lors de l'écriture du fichier purgé :", err);
        } else {
          console.log("CSS purgé avec succès !");
        }
      }
    );
  });
