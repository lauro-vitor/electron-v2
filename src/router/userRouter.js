import User from '../views/User/User'
import RegisterUser from '../views/User/RegisterUser'
import UpdateUser from '../views/User/UpdateUser'

const userRouter = [
    {
      path: '/users',
      name: 'User',
      component: User
    },
    {
      path: '/users/register',
      name: 'UserRegister',
      component: RegisterUser
    },
    {
      path: '/users/update/:id',
      name: 'UpdateUser',
      component: UpdateUser
    }
]
export default userRouter;