import express from 'express'
import usuarios from './routes/usuarios.js'
import db from './config/db.js'

const app = express()

app.use(express.urlencoded({extended: true}))

try {
    await db.authenticate()
    db.sync()
    console.log('Base de datos conectada')
} catch (error) {
    console.log(error)
}

app.set('view engine', 'pug')
app.set('views','./views')

app.use('/auth', usuarios)

app.use(express.static('public'))


const port = 3000
app.listen(port, () => {
    console.log(`App iniciada en el puerto ${port}`)
})