import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.create({
      email: 'admin@rocketbank.com',
      password: '123Change@',
    })
  }
}
