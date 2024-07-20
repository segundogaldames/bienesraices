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

const recuperarPassword = (req, res) =>{
    res.render('auth/recuperar',{
        pagina: 'Recuperar Password'
    })
}


export {
    login,
    registro,
    recuperarPassword
}