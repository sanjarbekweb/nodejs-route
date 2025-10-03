import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = Router()

const users = []

router.get('/', (req, res) => {
	res.status(200).send(users)
})

router.get('/:id', (req, res) => {
	const userId = req.params.id

	const user = users.find(u => u.id === userId)

	if (!user) {
		res.status(404).send('hali bunaqa IDli user mavjud emas')
		return
	}
	res.status(200).send(user)
})

router.post('/', (req, res) => {
	const { name, email, avatar } = req.body
	try {
		if (name === '' && email === '' && avatar === '') {
			res.send("Maydonlarni to'ldiring")
			return
		}

		const newUser = {
			id: uuidv4(),
			name,
			email,
			avatar,
		}

		users.push(newUser)

		res.status(201).send({ posts: newUser })
	} catch (error) {
		res.send(error.message)
	}
})

router.delete('/:id', (req, res) => {
  const userId = req.params.id;

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).send('hali bunaqa IDli user mavjud emas');
  }

  const updatedUsers = users.filter(u => u.id !== userId);

  users.length = 0;
  users.push(...updatedUsers);

  res.status(200).send({ deleted: user, users });
});


export default router
