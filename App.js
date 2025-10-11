// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import TabNavigator from './src/navigation/TabNavigator';
import RecordScreen from './src/screens/RecordScreen';
import TreatmentsScreen from './src/screens/TreatmentsScreen';
import QuotesScreen from './src/screens/QuotesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen
          name="Record"
          component={RecordScreen}
          options={{ headerShown: true, title: 'Mi Salud' }}
        />
        <Stack.Screen
          name="Treatments"
          component={TreatmentsScreen}
          options={{ headerShown: true, title: 'Mis Tratamientos' }}
        />
          <Stack.Screen
          name="Quotes"
          component={QuotesScreen}
          options={{ headerShown: true, title: 'Mis Citas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
