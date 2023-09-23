import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
  return (
    <Container py={"16"} minH={"90vh"}>
        <form>
            <Heading children="Change Password" my={"16"} textAlign={["center","left"]} textTransform={"uppercase"}/>
            <VStack spacing={"8"}>
            <Input
              type="password"
              focusBorderColor="yellow.500"
              placeholder="Old Password"
              required
              id="password"
              value={oldPassword}
              onChange={e => {
                setOldPassword(e.target.value);
              }}
            />


            <Input
              type="password"
              focusBorderColor="yellow.500"
              placeholder="New Password"
              required
              id="password"
              value={newPassword}
              onChange={e => {
                setNewPassword(e.target.value);
              }}
            />
            <Button w="full" colorScheme='yellow' type="submit">Change Password</Button>
            </VStack>
        </form>

    </Container>
  )
}

export default ChangePassword