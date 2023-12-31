import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile.js';
import { loadUser } from '../../redux/actions/user.js';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({user}) => {
    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = async e => {
      e.preventDefault();
      await dispatch(updateProfile(name, email));
      dispatch(loadUser());
      navigate('/profile');
    };
    
    const {loading} = useSelector(state => state.profile);

  return (
    <Container py={"16"} minH={"90vh"}>
        <form onSubmit={submitHandler}>
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
            <Button isLoading={loading} w="full" colorScheme='yellow' type="submit">Update Profile</Button>
            </VStack>
        </form>

    </Container>
  )
}

export default UpdateProfile