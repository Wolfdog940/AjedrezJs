const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Ruta estática para servir archivos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta para manejar todas las demás rutas y devolver index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});