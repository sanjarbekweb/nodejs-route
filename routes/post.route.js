import { Router } from 'express'

const router = Router()

const post = []

router.get('/', (req  , res)=>{
	res.status(200).send(post)
})

router.post('/', (req,res)=>{
	const {title, img_url} = req.body
	try{
		if(title === '' && img_url === ''){
			res.send("Maydonlarni to'ldiring")
			return
		}

		const newPost = {
			title,
			img_url
		}
		post.push(newPost)
		res.status(201).send({posts: newPost})
	} catch (error) {
		res.send(error.message)
	}
}) 

export default router