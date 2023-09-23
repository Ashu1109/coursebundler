import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email,setEmail] = useState('');
  return (
    <Container py={'16'} h={'90vh'}>
        <form>
            <Heading children="Forget Password" my={'16'} textAlign={['center','left']} textTransform={'uppercase'} />
            <VStack spacing={'8'}>
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
              <Button type="submit" width={'full'} colorScheme='yellow'>Send Reset Link</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ForgetPassword