import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password } = request.all()

    console.log(request.all())

    const user = await User.findBy('email', email)
  
    if (!user) {
      return response.badRequest('Invalid credentials')
    }

    if (!(await Hash.verify(user.password, password))) {
      return response.badRequest('Invalid credentials')
    }
  
    const token = await auth.use('api').generate(user, {
      expiresIn: '5mins'
    })

    return response.ok(token)
  }
}
