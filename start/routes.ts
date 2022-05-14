import Route from '@ioc:Adonis/Core/Route'

Route.post('login', 'AuthController.login')

Route.group(() => {
  Route.post('logout', 'AuthController.logout')

  Route.resource('clients', 'ClientsController').apiOnly()
}).middleware('auth')

Route.any('*', 'HomeController.index')
