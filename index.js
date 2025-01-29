const express = require ("express")
const app = express()

app.get('/' , (request , response) => {
    response.send('wellcome express in node js.')
})

app.get('/api' , (request , response ) => {
    response.send('you have request http://localhost::8081/api')
})

app.listen(8081,()=>{
    console.log('server run http://localhost:8081')
})

