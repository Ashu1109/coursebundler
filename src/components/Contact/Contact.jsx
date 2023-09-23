import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    return (
        <Container h="92vh" py="16" >
            <VStack h="full" justifyContent={"center"} spacing={"16"}>
                <Heading children="Contact Us" />
                <form style={{ width: '100%' }}>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor="name" children="Name" />
                        <Input
                            type="text"
                            focusBorderColor="yellow.500"
                            placeholder="Enter Your Name"
                            required
                            id="email"
                            value={name}
                            onChange={e => {
                                setName(e.target.value);
                            }}
                        />
                    </Box>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor="email" children="Email Address" />
                        <Input
                            type="email"
                            focusBorderColor="yellow.500"
                            placeholder="abc@gmail.com"
                            required
                            id="email"
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Box>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor="message" children="Message" />
                        <Textarea
                            focusBorderColor="yellow.500"
                            placeholder="Comments"
                            required
                            id="massage"
                            value={message}
                            onChange={e => {
                                setMessage(e.target.value);
                            }}
                        />
                    </Box>
                    <Button my={'4'} colorScheme="yellow" type="submit">
                        Submit
                    </Button>


                    <Box my='4'>
                        Request for a course? <Link to='/request'><Button colorScheme='yellow' variant={'link'}>Click</Button> here</Link>
                    </Box>
                </form>
            </VStack>

        </Container>
    )
}

export default Contact