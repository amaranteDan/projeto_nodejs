module.exports = function(app){
    app.get('/users', (req, res)=> {

        res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json({
                    users:[{
                        name: 'Daniel Amarante',
                        email: 'danz82158@gmail.com',
                        id: 1
                
                    }]
                })
               
         
    })
    
    app.post('/users', (req, res) => {
            res.json(req.body);
        })
    }