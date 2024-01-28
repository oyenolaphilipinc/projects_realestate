import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../utils/firebase';
import { useRouter } from 'next/router';
import { Toaster, toast } from 'react-hot-toast';
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
    Flex,
    Spinner
  } from '@chakra-ui/react'
  import { Logo } from '../components/Logo'
  import { OAuthButtonGroup } from '../components/OAuthButtonGroup'
  import { PasswordField } from '../components/PasswordField'
  
 const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignIn = async (event) => {
        event.preventDefault();
        const auth = getAuth(firebaseApp);

        try {
        setLoading(true);

        await signInWithEmailAndPassword(auth, email, password);

        toast.success('Signin successful! Redirecting to the Dashboard.');
        setTimeout(() => {
            router.push('/dashboard');
        }, 2000);
        } catch (error) {
        toast.error('Error during sign-in:', error.message);
        } finally {
        setLoading(false);
        }
    };
    return(
        <>
        <Toaster position="top-right" reverseOrder={false} />
        <form onSubmit={handleSignIn}>
        <Container
        maxW="lg"
        py={{
            base: '12',
            md: '24',
        }}
        px={{
            base: '0',
            sm: '8',
        }}
        >
        <Stack spacing="8">
            <Stack spacing="6">
            <Logo />
            <Stack
                spacing={{
                base: '2',
                md: '3',
                }}
                textAlign="center"
            >
                <Heading
                size={{
                    base: 'xs',
                    md: 'sm',
                }}
                >
                Log in to your admin account
                </Heading>
            </Stack>
            </Stack>
            <Box
            py={{
                base: '0',
                sm: '8',
            }}
            px={{
                base: '4',
                sm: '10',
            }}
            bg={{
                base: 'transparent',
                sm: 'bg.surface',
            }}
            boxShadow={{
                base: 'none',
                sm: 'md',
            }}
            borderRadius={{
                base: 'none',
                sm: 'xl',
            }}
            >
            <Stack spacing="6">
                <Stack spacing="5">
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </FormControl>
                <PasswordField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Stack>
                <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="text" size="sm">
                    Forgot password?
                </Button>
                </HStack>
                <Stack spacing="6">
                {loading ? (
                    <Flex align="center" justify="center">
                    {/* Use the Spinner component for a spinning animation */}
                    <Spinner color="#3056D3" size="lg" />
                    </Flex>) : (
                <Button type='submit'>Sign in</Button> 
                )}
                <HStack>
                    <Divider />
                    <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                    or continue with
                    </Text>
                    <Divider />
                </HStack>
                <OAuthButtonGroup />
                </Stack>
            </Stack>
            </Box>
        </Stack>
        </Container>
        </form>
        </>
    )
    }
export default Login;