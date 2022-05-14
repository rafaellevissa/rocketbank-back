import { DateTime } from 'luxon'
import { BaseModel, beforeSave, beforeUpdate, column } from '@ioc:Adonis/Lucid/Orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.date()
  public birthdate: DateTime

  @column()
  public document: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  @beforeUpdate()
  public static async hashPassword(client: Client) {
    if (client.$dirty.document) {
      client.document = client.$dirty.document.replace(/\D/g, '')
    }
  }
}
