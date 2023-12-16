import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Favorite from "./pages/Favorite"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, FAVORITE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: FAVORITE_ROUTE,
    Component: Favorite
  }
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  }
  
]