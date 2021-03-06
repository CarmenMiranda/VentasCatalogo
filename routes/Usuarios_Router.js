/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Métodos para usuario
 */

const router = require("express").Router();
const Usuarios_Controller = new (require("../controllers/Usuarios_Controller"))();
const Sesion = new (require("../controllers/Sesion_Controller"))();

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     security:
 *       - JWT: []
 *     tags:
 *       - Usuarios
 *     summary: Obtener usuario por id
 *     description: Obtiene los datos de un usuario por su ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID del usuario a obtener
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: El usuario a buscar
 *         type: object
 *         allOf:
 *           - $ref: '#/definitions/Response'
 *           - type: object
 *             properties:
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   $ref: '#/definitions/Usuario'
 */
router.get("/:id", Sesion.verificarSesion, Usuarios_Controller.obtener);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Registrar usuario
 *     description: Registra un usuario nuevo a partir de sus datos
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: Cuerpo de la solicitud
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/UsuarioNuevo'
 *     responses:
 *       200:
 *         description: El usuario agregado
 */
router.post("/", Usuarios_Controller.registrar);

module.exports = router;