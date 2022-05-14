import Factory from '@ioc:Adonis/Lucid/Factory'
import Client from 'App/Models/Client'
import { DateTime } from 'luxon'


export const ClientFactory = Factory
  .define(Client, ({ faker }) => {
    return {
      name: faker.internet.userName(),
      birthdate: DateTime.fromObject({ ordinal: faker.datatype.number(364) + 1 }),
      document: faker.random.numeric(11)
    }
  })
  .build()