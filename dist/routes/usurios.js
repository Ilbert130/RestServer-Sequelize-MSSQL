"use strict";
const express_1 = require("express");
const usuarios_1 = require("../controller/usuarios");
const router = (0, express_1.Router)();
//GET
router.get('/', usuarios_1.getUsuarios);
//GET
router.get('/:id', usuarios_1.getUsuario);
//POST
router.post('/', usuarios_1.postUsuario);
//PUT
router.put('/:id', usuarios_1.putUsuario);
//DELETE
router.delete('/:id', usuarios_1.deleteUsuario);
module.exports = router;
//# sourceMappingURL=usurios.js.map