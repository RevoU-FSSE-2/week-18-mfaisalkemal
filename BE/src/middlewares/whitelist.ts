
const whitelist =  {
    clientOptionsGlobal : {
        origin: ['http://34.142.252.30:3001','http://localhost:5173'],
        methods:['GET','POST','PUT','DELETE', 'PATCH'],
        allowedHeaders: ['Authorization', 'Content-Type'],
    }
}

export default whitelist