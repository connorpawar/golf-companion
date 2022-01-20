import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Code,
  NativeBaseProvider,
  Button,
} from "native-base";
import NativeBaseIcon from "../components/NativeBaseIcon";
import create from 'zustand';

const useStore = create(set => ({
}))

export const Home = ({navigation}) => {
    return (
        <NativeBaseProvider>
            <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
            >
            <VStack space={5} alignItems="center">
                <NativeBaseIcon />
                <Heading size="lg">Welcome to my golf companion</Heading>
                <HStack space={2} alignItems="center">
                <Text>The one tool to help track your game</Text>
                </HStack>
                <Link href="https://docs.nativebase.io" isExternal>
                <Button
                marginRight={10}
                    onPress={() => navigation.navigate('Login')}
                >
                    Login
                </Button>
                <Button
                    onPress={() => navigation.navigate('SignUp')}
                >
                    SignUp
                </Button>
                </Link>
                <ToggleDarkMode />
            </VStack>
            </Center>
        </NativeBaseProvider>
    )
}

// Color Switch Component
const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
    return (
      <HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === "light" ? true : false}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "switch to dark mode" : "switch to light mode"
          }
        />
        <Text>Light</Text>
      </HStack>
    );
  }
  