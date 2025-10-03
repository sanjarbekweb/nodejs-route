import { Router } from 'express'

const router = Router()

router.get('/', (_ , res)=>{
	res.status(200).send("userlar")
})

router.post('/', (req,res)=>{
	const {name, email, avatar} = req.body
	try{

		if(name === '' && email === '' && avatar === ''){
			res.send("Maydonlarni to'ldiring")
			return
		}

		res.status(201).send({posts: {name, email, avatar}})
	} catch (error) {
		res.send(error.message)
	}
}) 

export default router