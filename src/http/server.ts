import { Elysia } from "elysia"


const app = new Elysia()

app.get('/', () => {
  return 'Ola frantec'
})


app.listen(3333, () => {
  console.log('Https Server runnig')
})