import { Request, Response } from "express";



//GET
export const getUsuarios = (req:Request, res:Response):void => {

    res.json({
        msg:'getUsuarios'
    });

}

//GET
export const getUsuario = (req:Request, res:Response):void => {

    const {id} = req.params;

    res.json({
        id,
        msg:'getUsuario'
    });
}

//POST
export const postUsuario = (req:Request, res:Response):void => {

    const {body} = req.body

    res.json({
        body,
        msg:'postUsuario'
    });
}

//PUT
export const putUsuario = (req:Request, res:Response):void => {

    const {id} = req.params;
    const {body} = req.body;

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