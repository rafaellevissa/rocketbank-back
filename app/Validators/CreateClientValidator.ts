import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateClientValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([rules.minLength(3), rules.maxLength(200)]),
    birthdate: schema.date(),
    document: schema.string([rules.maxLength(14), rules.minLength(11)]),
  })

  public messages = {}
}
