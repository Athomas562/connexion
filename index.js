const express = require('express');
const path = require('path');

const app = express();

// Servir les fichiers statiques dans /public
app.use(express.static(path.join(__dirname, 'public')));

// Exemple de route API backend
app.get('/api/hello', (req, res) => {
  res.json({ message: "Salut, c'est ton backend MEME !" });
});

// Écouter le port fourni par Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server MEME running on port ${PORT}`);
});
