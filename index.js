import express from 'express'
import usuarios from './routes/usuarios.js'

const app = express()

app.set('view engine', 'pug')
app.set('views','./views')

app.use('/auth', usuarios)

app.use(express.static('public'))


const port = 3000
app.listen(port, () => {
    console.log(`App iniciada en el puerto ${port}`)
})