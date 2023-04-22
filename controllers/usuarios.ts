import { Request, Response } from "express";
import Usuario from "../models/usuario";



//GET
export const getUsuarios = async(req:Request, res:Response):Promise<void> => {

    const usuarios = await Usuario.findAll();

    res.json({
        msg:'getUsuarios',
        usuarios
    });

}

//GET
export const getUsuario = async(req:Request, res:Response):Promise<void> => {

    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);

    if(usuario){
        res.json({
            msg:'getUsuario',
            usuario
        });

    }else{
        res.json({
            msg:`No existes el usuario con el id ${id}`
        });
    }
}

//POST
export const postUsuario = (req:Request, res:Response):void => {

    const {body} = req

    res.json({
        body,
        msg:'postUsuario'
    });
}

//PUT
export const putUsuario = (req:Request, res:Response):void => {

    const {id} = req.params;
    const {body} = req

    res.json({
        id,
        body,
        msg:'putUsuario'
    });
}

//DELETE
export const deleteUsuario = (req:Request, res:Response):void => {

    const {id} = req.params;

    res.json({
        id,
        msg:'putUsuario'
    });
}