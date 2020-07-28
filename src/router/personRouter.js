import Person from '../views/Person/Person'
import RegisterPerson from '../views/Person/RegisterPerson'
import UpdatePerson from '../views/Person/UpdatePerson'

const personRouter = [
    {
        path: '/persons',
        name: 'Person',
        component: Person
    },
    {
        path: '/persons/register',
        name: 'RegisterPerson',
        component: RegisterPerson
    },
    {
        path: '/persons/update/:id',
        name: 'UpdatePerson',
        component: UpdatePerson
    },
];

export default personRouter;