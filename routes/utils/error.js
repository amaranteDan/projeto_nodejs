/*Criando arquivo para tratar erros */

module.exports = {
    send: (err, req, res, code = 400)=>{

        console.log(`error: ${err.message}`)
            res.status(code).json({
            error: err
        })
    }
}