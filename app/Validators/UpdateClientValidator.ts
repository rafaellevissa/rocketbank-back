import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateClientValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional([rules.minLength(3), rules.maxLength(200)]),
    birthdate: schema.date.optional(),
    document: schema.string.optional([rules.maxLength(14), rules.minLength(11)]),
  })

  public messages = {}
}
