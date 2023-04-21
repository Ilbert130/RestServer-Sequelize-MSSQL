"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
//GET
const getUsuarios = (req, res) => {
    res.json({
        msg: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
//GET
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        msg: 'getUsuario'
    });
};
exports.getUsuario = getUsuario;
//POST
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        body,
        msg: 'postUsuario'
    });
};
exports.postUsuario = postUsuario;
//PUT
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        id,
        body,
        msg: 'putUsuario'
    });
};
exports.putUsuario = putUsuario;
//DELETE
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        msg: 'putUsuario'
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map