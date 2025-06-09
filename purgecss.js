const purgecss = require("purgecss");
const fs = require("fs");

// Fichiers à analyser
const contentFiles = [
  "./index.html",
  "./assets/scripts.js",
  "./assets/maugallery.js",
  "./assets/bootstrap/bootstrap.bundle.js",
  "./assets/bootstrap/bootstrap.bundle.js.map",
  "./assets/bootstrap/bootstrap.bundle.min.js",
  "./assets/bootstrap/bootstrap.bundle.min.js.map",
];

// Le fichier CSS à purger
const cssFile = "./assets/bootstrap/bootstrap.css";

// Classes à préserver pour pas qu'elles soient supprimées par PurgeCSS
const safelist = [
  "col-12",
  "col-sm-6",
  "col-md-4",
  "col-lg-4",
  "col-xl-4",
  "gallery-item",
  "img-fluid",
  "mb-4",
  "py-3",
  "nav-link",
  "active",
  "carousel",
  "carousel-item",
  "carousel-control-prev",
  "carousel-control-next",
  "lightboxImage",
  "mg-prev",
  "mg-next",
  "tags-bar",
  "nav-pills",
  "nav-link",
];

// Créer une purge PurgeCSS
const purge = new purgecss.PurgeCSS();

// Exécuter la purge
purge
  .purge({
    content: contentFiles,
    css: [cssFile],
    safelist: safelist,
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
