import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/octicons';

const Tab = createBottomTabNavigator();
import HomeScreen from '../../screens/Home'
import ProfileScreen from '../../screens/Profile';

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{tabBarInactiveTintColor: "darkred", tabBarActiveTintColor: 'red', headerShown: false}}>
        <Tab.Screen name="HomePage" component={HomeScreen} options={{
            tabBarIcon:({focused,color,size})=><Icon name="home" size={size} color={color} />
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon:({focused,color,size})=><Icon name="person-fill" size={size} color={color}/>
            }} />
    </Tab.Navigator>
  )
}

