import Header from '@/components/Header'
import { ThemedText } from '@/components/ThemedText'
import { Stack } from 'expo-router'
import { Button, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, header: () => {
          return (
            <Header></Header>
          )
        } }}
      />
      <Stack.Screen name="detail" options={{ headerShown: true }} />
    </Stack>
  )
}
