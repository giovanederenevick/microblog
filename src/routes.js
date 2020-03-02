import React from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'

import Preload from './components/Preload'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Sign : createSwitchNavigator({
                Preload,
                SignIn,
                SignUp,
                Home,
                New,
                Edit
            })
        }
    )
)

export default Routes