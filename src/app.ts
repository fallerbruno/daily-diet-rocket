import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { usersRoutes } from './routes/user'
import { mealsRoutes } from './routes/meal'

export const app = fastify()

// Cadastrando os cookies
app.register(cookie)

// Registrando plugins - rotas
// O segundo parâmetro é o prefix -> que é o prefixo da url para ativar
app.register(usersRoutes, { prefix: 'user' })
app.register(mealsRoutes, { prefix: 'meal' })
