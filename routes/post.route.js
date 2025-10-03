import { Router } from 'express'

const router = Router()

router.get('/', (_ , res)=>{
	res.status(200).send("postslar")
})

router.post('/', (req,res)=>{
	const {title, img_url} = req.body
	try{
		if(title === '' && img_url === ''){
			res.send("Maydonlarni to'ldiring")
			return
		}

		res.status(201).send({posts: {title, img_url}})
	} catch (error) {
		res.send(error.message)
	}
}) 

export default router