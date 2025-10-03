import express from "express"
import postRoute from "./routes/post.route.js"
import userRoute from "./routes/user.route.js"
import dotenv from 'dotenv'
import cors from "cors"
dotenv.config()
const PORT = process.env.PORT
const server = express()
server.use(express.json())
server.use(cors())

server.get('/', (req,res)=>{
	res.send({ok: true})
})
server.use('/posts', postRoute)
server.use('/users', userRoute)


server.listen(PORT, ()=>{
	console.info("server is running on 3000 port");
})