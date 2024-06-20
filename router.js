import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Anel from './pages/Anel/index1';
import Braceletes from './pages/Braceletes/index2';
import Colar from './pages/Colar/index3';
import Carrinho from './telas/Carrinho/index.js';
import LoginPage from './pages/LoginPage/index.jsx';


const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
           />
                <Stack.Screen 
                name="Detail"
                component={Detail}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                       
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="Anel"
                component={Anel}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                       
                      </TouchableOpacity>  
                    )
                }}
                />
       
                <Stack.Screen 
                name="Colar"
                component={Colar}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                       
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="Braceletes"
                component={Braceletes}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                       
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="Carrinho"
                component={Carrinho}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                       
                      </TouchableOpacity>  
                    )
                }}
                />

                <Stack.Screen 
                name="LoginPage"
                component={LoginPage}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                       
                      </TouchableOpacity>  
                    )
                }}
                />
               
               
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;