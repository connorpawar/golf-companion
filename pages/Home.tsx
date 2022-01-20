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
                <Text>Edit</Text>
                <Code>App.js</Code>
                <Text>and save to reload.</Text>
                </HStack>
                <Link href="https://docs.nativebase.io" isExternal>
                <Button
                    onPress={() => navigation.navigate('Courses')}
                >
                    Go to Courses
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
  