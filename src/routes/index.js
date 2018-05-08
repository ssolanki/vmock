// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import UserRoute from './User'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/home',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    Home(store),
    UserRoute(store)
  ]
})

export default createRoutes
