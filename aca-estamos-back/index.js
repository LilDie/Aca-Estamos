const app = require("./src/app/app");
const dbconnect = require("./src/database/conexion");
const port = 3000;


dbconnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Aplicacion corriendo en ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error.message);
  });
