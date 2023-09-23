import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password,setPassword] = useState('');
    const params = useParams();
    return (
      <Container py={'16'} h={'90vh'}>
          <form>
              <Heading children="Reset Password" my={'16'} textAlign={['center','left']} textTransform={'uppercase'} />
              <VStack spacing={'8'}>
                <FormLabel htmlFor="email" children="Email Address" />
                <Input
                  type="password"
                  focusBorderColor="yellow.500"
                  placeholder="New Password"
                  required
                  id="email"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
                <Button type="submit" width={'full'} colorScheme='yellow'>Reset Password</Button>
              </VStack>
          </form>
      </Container>
    )
}

export default ResetPassword