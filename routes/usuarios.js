import express from "express"
import {login, registro, registrar, recuperarPassword} from '../controllers/usuariosController.js'

const router = express.Router()

router.get('/login', login)
router.get('/registro', registro)
router.post('/registro', registrar)
router.get('/recuperar', recuperarPassword)

export default router