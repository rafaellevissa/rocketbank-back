import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User' // TODO

export default class ClientsController {
  /**
   * Return list of clients
   * @returns App/Models/Client
   */
  public async index() {
    return User.all()
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
