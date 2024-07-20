import express from "express"
import {login, registro, recuperarPassword} from '../controllers/usuariosController.js'

const router = express.Router()

router.get('/login', login)
router.get('/registro', registro)
router.get('/recuperar', recuperarPassword)

export default router