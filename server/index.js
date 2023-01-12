const express = require('express');
const app = express()
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(cors());
app.use(express.json())
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 


  const usuarios = [
    {
        "id":"123",
        "email":"teste@gmail.com",
        "password":"1234"
    },
    {
        "id":"1234",
        "email":"teste2@gmail.com",
        "password":"1234"
    }

    ]
  

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

    //Primeiro recebe o email 

    const email_recebido = req.body.email

    //depois verifica se existe 

    //os emails ficam aqui para serem validados 
    const arara = []


    usuarios.forEach(obj => {
        arara.push(obj.email)
        //console.log(obj.email)

        
    })

    ///console.log(arara)

    const verifica_email = arara.includes(email_recebido)

    ///console.log(arara.includes(email_recebido))



    if (verifica_email === true){

        // se existir manda um objeto com os dados e o id
        // pega os elementos do array e insere no molde do objeto

        var filtrar = usuarios.filter(function(obj) { return obj.email == email_recebido });

        //console.log(filtrar)

        const user = {
            user:{
                "id": `${filtrar[0].id}`,
                "email":`${filtrar[0].email}`,
                "password":`${filtrar[0].password}`
            },

            token: "1234567890"
        }

        //let email = req.body.email
        let password = req.body.password

        /*
        const user = {
            user:{
                "id":"123",
                "email":"teste@gmail.com",
                "password":"1234"
            },

            token: "1234567890"
        }

    
        */


   

        if(filtrar[0].password === password){

            res.json(user)

        }else{
           console.log('Senha incorreta!')
        }

        
    }else{
        console.log("Email invalido ou não cadastrado")
        return null;
    }
    
    

    
})

app.listen(5000, () => {

    /*

    let ara = { user: "nome1", user: "nome2"} 
    let ara2 = [ {user:"teste"}, {user: "teste2"} ]
    const ara3 = ["teste","teste2","teste3"]

   // let numeroa = parseInt((Math.random(1,12)) * 10)
    console.log(ara2.includes("teste") )

    console.log(Object.values(ara))

    console.log((Object.values(ara.user)).includes("nome1"))
   


    var array = 
[

    {
        conta_id : "7",
        marcar : 1,
        pag_data_emissao : "04/08/2015",
        pag_debito_credito : "D",
        pag_historico : "CHEQUE 331107  VENDA S",
        pag_id : "47782",
        pag_utilizado :"VENDA S",
        pag_valor : "7.000,00"
    },
    {
        conta_id : "7",
        marcar : 0,
        pag_data_emissao : "07/08/2015",
        pag_debito_credito : "D",
        pag_historico : "DEPOSITO 3117  VENDA X",
        pag_id : "47783",
        pag_utilizado :"VENDA X",
        pag_valor : "640,63"
    }
];


var filtrado = array.filter(function(obj) { return obj.marcar == 0; });

//console.log(filtrado)
//console.log(Object.values(filtrado[0]))


var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]


const user1 = {
    user:{
        "id":"123",
        "email":"teste@gmail.com"},
    user:{
            "id":"1234",
            "email":"teste2@gmail.com"},

    //token: "1234567890"
}

var puxar_email = Object.values(user1) 

console.log(puxar_email)
console.log(user1.user)


const user2 = [ 
    
    {
    "id":"123",
    "email":"teste@gmail.com",
    "password":"1234"
    },

    {
    "id":"1234",
    "email":"teste2@gmail.com",
    "password":"123456"
        
    }
]


const user = {
    user:{
        "id":"123",
        "email":"teste@gmail.com",
        "password":"1234"
    },
    user:{
        "id":"1234",
        "email":"teste3@gmail.com",
        "password":"1234"
    }

    //token: "1234567890"
}

/*

*/
//const objetos = Object.values(user)

//console.log(objetos)

//var puxar_email = Object.values(user2) 

//var filtrado2 = user2.filter(function(obj) { return obj.id == 123; });


//console.log(puxar_email)

//console.log(filtrado2[0].email)


//console.log(user2.includes({email:"teste@gmail.com"}))

//console.log(user2)


    console.log('server rodando na porta 5000')

    //console.log(`episodio: ${numeroa}`)
})
