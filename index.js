import express from "express"
import postRoute from "./routes/post.route.js"
import userRoute from "./routes/user.route.js"

const server = express()
server.use(express.json())

server.use('/posts', postRoute)
server.use('/users', userRoute)


server.listen(3000, ()=>{
	console.info("server is running on 3000 port");
})