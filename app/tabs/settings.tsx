import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function Tab() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>configurações</Text>
      <Stack.Screen options={{ headerShown: false }}/> 
    </View>
  );
}