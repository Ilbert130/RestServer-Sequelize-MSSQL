import { Request, Response } from "express";
import Usuario from '../models/usuario';



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
export const postUsuario = async(req:Request, res:Response) => {

    const {body} = req

    
    try {

        const existEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        })

        if(existEmail){
            return res.status(400).json({
                msg:'Ya existe un usuario con el email introducido'
            });
        }

        const usuario = Usuario.build(body);
        await usuario.save();

        res.json({
            msg:'postUsuario',
            body
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Hable con el administrador'
        });
    }
}

//PUT
export const putUsuario = async(req:Request, res:Response) => {

    const {id} = req.params;
    const {body} = req

    try {

        const usuario = await Usuario.findByPk(id);

        if(!usuario){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ingresado'
            });
        }

        await usuario.update(body);

        res.json({
            msg:'postUsuario',
            usuario
        });
        
    } catch (error) {
        console.log(error);
        res.json({
            msg:'Hable con el administrador'
        });
    }
}

//DELETE
export const deleteUsuario = async(req:Request, res:Response) => {

    const {id} = req.params;

    const usuario = await Usuario.findByPk(id);
    if(!usuario){
        return res.status(404).json({
            msg: 'No existe un usuario con el id ingresado'
        });
    }

    //Eliminacion fisica del registro en la base de datos
    // await usuario.destroy();

    //Eliminacion actualizando el campo estado
    await usuario.update({estado:false});

    res.json({
        msg:'putUsuario',
        usuario
    });
}