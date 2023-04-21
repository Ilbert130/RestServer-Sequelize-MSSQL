import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuarios";


const router = Router();

//GET
router.get('/', getUsuarios);

//GET
router.get('/:id', getUsuario);

//POST
router.post('/', postUsuario);

//PUT
router.put('/:id', putUsuario);

//DELETE
router.delete('/:id', deleteUsuario);


export = router;