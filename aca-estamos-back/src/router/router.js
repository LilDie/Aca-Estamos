const express = require('express');
const router = express.Router();
const listaUsuarios = require('../controllers/user-get');
const CrearUsuario = require('../controllers/user-create');
const DeleteUser = require('../controllers/user-delete');
const ActualizarUser = require('../controllers/user-update');
const IdUsuario = require('../controllers/user-get-id');
const LoginUser = require('../controllers/user-login');
const CrearEmpresa = require('../controllers/emp-create');
const LoginEmpresa = require('../controllers/emp-login');
const GuardarPerfil = require('../controllers/user-perfil-guardar');
const ObtenerPerfil = require('../controllers/user-perfil-obtener');
const multer = require('multer');
const isAuth = require('../middlewares/validar-jwt');

// Multer para Usuarios
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


//Router   USUARIOS //
router.get('/Usuario', listaUsuarios);
router.get('/Usuario/:id', IdUsuario);
router.post('/Crear-usuario', CrearUsuario);
router.post('/Login-usuario', LoginUser)
router.put('/Actualizar-Usuario/:id', ActualizarUser);
router.delete('/Borrar-Usuario/:id', DeleteUser);
router.post('/Guardar-Perfil', upload.fields([
    { name: 'ArchivoPDF1', maxCount: 1 },
    { name: 'ArchivoPDF2', maxCount: 1 },
    { name: 'ArchivoPDF3', maxCount: 1 },
    { name: 'ArchivoPDF4', maxCount: 1 },
    { name: 'ImagenPerfil', maxCount: 1 }]), GuardarPerfil);
router.get('/Obtener-Perfil/:id', ObtenerPerfil);

//Router   EMPRESAS //

router.post('/Crear-Empresa', CrearEmpresa);
router.post('/Login-empresa', LoginEmpresa);

//Router   ADMINISTRADOR //



// Router ruta protegida
router.get("/ruta-protegida", isAuth, (req, res) => {
    res.send("Ruta protegida");
}
);

module.exports = router;


