import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Client from 'App/Models/Client'
import CreateClientValidator from 'App/Validators/CreateClientValidator'
import UpdateClientValidator from 'App/Validators/UpdateClientValidator'

export default class ClientsController {
  /**
   * Return list of clients
   * @returns Promise<ModelPaginatorContract<Client>>
   */
  public async index({ request }: HttpContextContract): Promise<ModelPaginatorContract<Client>> {
    const { page, perPage } = request.qs()

    return Client.query().paginate(page || 1, perPage || 10)
  }

  /**
   * Store a new instance of client
   * @param request RequestContract
   * @returns Promise<Client>
   */
  public async store({ request }: HttpContextContract): Promise<Client> {
    const { name, birthdate, document } = await request.validate(CreateClientValidator)

    return Client.create({
      name,
      birthdate,
      document,
    })
  }

  /**
   * Find a client by its id
   * @param params Record<string, any>
   * @returns Promise<Client>
   */
  public async show({ params }: HttpContextContract): Promise<Client> {
    return Client.findOrFail(params.id)
  }

  /**
   * Update a client by its id
   * @param request RequestContract
   * @param params Record<string, any>
   * @returns Promise<Client>
   */
  public async update({ request, params }: HttpContextContract): Promise<Client> {
    const { name, birthdate, document } = await request.validate(UpdateClientValidator)

    const client = await Client.findOrFail(params.id)

    return client
      .merge({
        name,
        birthdate,
        document,
      })
      .save()
  }

  /**
   * Delete an instance of client by its id
   * @param params Record<string, any>
   * @returns Promise<Client>
   */
  public async destroy({ params }: HttpContextContract): Promise<Client> {
    const client = await Client.findOrFail(params.id)

    client.delete()

    return client
  }
}
