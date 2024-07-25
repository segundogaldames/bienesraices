import { check, validationResult } from "express-validator";
import Usuario from "../models/Usuario.js"
import { generarId } from "../helpers/token.js";

const login = (req, res) =>{
    res.render('auth/login',{
        pagina: 'Login'
    })
}

const registro = (req, res) =>{
    res.render('auth/registro',{
        pagina: 'Crear Cuenta'
    })
}

const registrar = async (req, res) =>{
    //validando
    await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req)
    await check('email').isEmail().withMessage('El email no es válido').run(req)
    await check('password').isLength({min: 8}).withMessage('El password debe contener al menos 8 caracteres').run(req)
    await check('repetir_password').notEmpty().withMessage('El password no coincide').run(req)


    let resultado = validationResult(req)

    if (!resultado.isEmpty()) {
        return res.render('auth/registro',{
            pagina: 'Crear Cuenta',
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }
    const {nombre, email, password} = req.body
    const usuarioExiste = await Usuario.findOne({where: {email}})

    if (usuarioExiste) {
        return res.render('auth/registro',{
        pagina: 'Crear Cuenta',
        errores: [{msg: 'El usuario existe'}],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    const usuario = await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()
    })

    res.render('templates/mensaje', {
        pagina: 'Cuenta Creada',
        mensaje: 'Hemos enviado un correo, confirma tu cuenta'
    })
}

const recuperarPassword = (req, res) =>{
    res.render('auth/recuperar',{
        pagina: 'Recuperar Password'
    })
}


export {
    login,
    registro,
    registrar,
    recuperarPassword
}