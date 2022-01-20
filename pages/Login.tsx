import * as React from "react"
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  Link,
  HStack,
  Text,
  useColorMode
} from "native-base"

export const LoginForm = ({navigation}) => {
    const {} = useColorMode();
    return (
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>
  
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button 
            mt="2" 
            colorScheme="indigo"
            onPress={() => navigation.navigate('Courses')}
            >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Button
              marginRight={10}
              onPress={() => navigation.navigate('SignUp')}
            >
              I'm a new user
            </Button>
            <Button
              onPress={() => navigation.navigate('Courses')}
            >
              Biometric Login
            </Button>
          </HStack>
        </VStack>
      </Box>
    )
  }

export const Login = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <LoginForm navigation={navigation}/>
      </Center>
    </NativeBaseProvider>
  )
}