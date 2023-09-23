import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
  return (
    <Container py={"16"} minH={"90vh"}>
        <form>
            <Heading children="Update Profile" my={"16"} textAlign={["center","left"]} textTransform={"uppercase"}/>
            <VStack spacing={"8"}>
            <Input
              type="text"
              focusBorderColor="yellow.500"
              placeholder="Name"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />

            <Input
              type="email"
              focusBorderColor="yellow.500"
              placeholder="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <Button w="full" colorScheme='yellow' type="submit">Update Profile</Button>
            </VStack>
        </form>

    </Container>
  )
}

export default UpdateProfile