import * as React from 'react';
import {ressable, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Standard() {
  const [height, onChangeText] = React.useState('');
  const [weigh, onChangeText2] = React.useState('');
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(prevCount => weigh / (height/100) / (height / 100));
  return (
    <View style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginTop:50,
        marginBottom:25}}>
        <Text>Your height (cm): </Text>
        <TextInput
          style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 150, color: "white"}}
          placeholder="Enter your height"
          placeholderTextColor="white"
          onChangeText={text => onChangeText(text)}
          value={height}
        />
      </View>
      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginBottom:25}}>
        <Text>Your weight (kg): </Text>
        <TextInput
          style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 150, color: "white" }}
          placeholder="Enter your weight"
          placeholderTextColor="white"
          onChangeText={text => onChangeText2(text)}
          value={weigh}
        />
      </View>
      <View style={{width:"80%",
        backgroundColor:"blue",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10}}>
        <TouchableOpacity
          onPress={onPress}
        >
          <Text>Compute BMI</Text>
        </TouchableOpacity>
      </View>
      <Text>Your BMI: {count}</Text>
    </View>
  );
}

function Metric({ navigation }) {
  const [heightFeet, onChangeText] = React.useState('');
  const [weigh, onChangeText2] = React.useState('');
  const [heightInch, onChangeText3] = React.useState('');
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(prevCount => (weigh * 0.453592) / (((heightFeet * 12 * 2.54) + (heightInch* 2.54)) /100) / (((heightFeet * 12 * 2.54) + (heightInch* 2.54)) /100));
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgreen', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
      <Text>                      (feet)           (inches)</Text>
      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginBottom:25}}>
        <Text>Your height: </Text>
        <TextInput
          style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 50, marginRight: 30, color: "white" }}
          placeholder="Enter your height"
          placeholderTextColor="white"
          onChangeText={text => onChangeText(text)}
          value={heightFeet}
        />
        <TextInput
          style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 50, color: "white" }}
          placeholder="Enter your height"
          placeholderTextColor="white"
          onChangeText={text => onChangeText3(text)}
          value={heightInch}
        />
      </View>

      <View style={{flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: "row",
        marginBottom:25}}>
        <Text>Your weight (pounds): </Text>
        <TextInput
          style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 100, color: "white" }}
          placeholder="Enter your weight"
          placeholderTextColor="white"
          onChangeText={text => onChangeText2(text)}
          value={weigh}
        />
      </View>
      <View style={{width:"80%",
        backgroundColor:"blue",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10}}>
        <TouchableOpacity
          onPress={onPress}
        >
          <Text>Compute BMI</Text>
        </TouchableOpacity>
      </View>
      <Text>Your BMI: {count}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Standard') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Metric') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Standard (Sl) [kg, cm]" component={Standard}  />
        <Tab.Screen name="Metric [lb, in]" component={Metric} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;



