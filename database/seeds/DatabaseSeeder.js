'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Matheus Campos',
      email: 'silva.campos.matheus@gmail.com',
      password: '123456'
    })

    const team = await user.teams().create({
      name: 'Paideiatec',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
