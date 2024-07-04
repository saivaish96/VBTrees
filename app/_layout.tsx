import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'VB Trees' }}/>
      <Stack.Screen name="detail" options={{ title: 'VB Trees' }}/>
    </Stack>
  );
}
