const server = require("./src/server");

const db = require('./src/lib/db');



const port = 8081;

server.listen(8081, ()=>{
    console.log(`server is listening on http://localhost:${port}`)
})


