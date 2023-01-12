const express = require('express');
const app = express()
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json())
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 
  

app.get('/users', (req,res) => {
    
    const user = {
        user:{
            "id":"123",
            "email":"teste@gmail.com"},

        token: "1234567890"
    }

    res.json(user)

})


app.get('/teste', (req,res) => {


    const user = {
        user:{
            "id":"123",
            "email":"teste@gmail.com"},

        token: "1234567890"
    }



    res.json(user)


})


app.post('/sessions',(req,res) => {

    //console.log(password)
    console.log(  req.body.email )
    console.log(  req.body.password )

    let email = req.body.email
    let password = req.body.password

    const user = {
        user:{
            "id":"123",
            "email":"teste@gmail.com",
            "password":"1234"
        },

        token: "1234567890"
    }


    if (user.user.email === email){

        if(user.user.password === password){

            res.json(user)

        }else{
           console.log('Senha incorreta!')
        }

        
    }else{
        return null;
    }
    
    

    
})

app.listen(5000, () => {

   // let numeroa = parseInt((Math.random(1,12)) * 10)


    console.log('server rodando na porta 5000')
    //console.log(`episodio: ${numeroa}`)
})
