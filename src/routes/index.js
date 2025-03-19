import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screen
import AddressScreen from '../screens/Address';
import BottomTab from './Tab/BottomTab';
import LogIn from '../screens/LogIn';
import Register from '../screens/Register';
import FaceScreen from '../screens/FaceScreen';

const Stack = createNativeStackNavigator();


export default function RootStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FaceScreen" component={FaceScreen} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={BottomTab} />
            <Stack.Screen name="Address" component={AddressScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}



