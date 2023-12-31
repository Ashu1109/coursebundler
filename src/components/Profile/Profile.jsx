import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileUploadCss } from '../Auth/Register'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPlaylist, updateProfilePicture } from '../../redux/actions/profile'
import { cancelSubscription, loadUser } from '../../redux/actions/user'
import toast from 'react-hot-toast'

const Profile = ({user}) => {
    const dispatch = useDispatch();
    const removeFromPlaylistHandler =async id => {
        await dispatch(removeFromPlaylist(id));
        dispatch(loadUser());
    }
    const {loading, error, message} = useSelector(state => state.profile)
    const changeImageSubmitHandler = async (e,image) => {
            e.preventDefault();
            const newForm = new FormData();
            newForm.append("file",image);
            await dispatch(updateProfilePicture(newForm));
            dispatch(loadUser());
    }
    const cancelSubscriptionHandler = () =>{
        dispatch(cancelSubscription());
        dispatch(loadUser());
    }
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch({type:"clearError"})
        }

        if(message){
            toast.success(message);
            dispatch({type:"clearMessage"})
        }
    },[dispatch,error,message])
    const {isOpen,onClose,onOpen} = useDisclosure();
    return (
        <Container minH={"95vh"} maxW={"container.lg"} py={"8"}>
            <Heading children="Profile" m={"8"} textTransform={"uppercase"} />
            <Stack justifyContent={"flex-start"} direction={["column", "row"]} alignItems={"center"} spacing={["8", "16"]} padding={"8"}>
                <VStack>
                    <Avatar boxSize={"48"} src={user.avatar.url} />
                    <Button onClick={onOpen} colorScheme='yellow' variant={"ghost"}>
                        Change Photo
                    </Button>
                </VStack>

                <VStack spacing={"4"} alignItems={["center","flex-start"]}>
                    <HStack>
                        <Text children="Name" fontWeight={"bold"} />
                        <Text children={user.name} />
                    </HStack>{' '}
                    <HStack>
                        <Text children="Email" fontWeight={"bold"} />
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children="CreatedAt" fontWeight={"bold"} />
                        <Text children={user.createdAt.split("T")[0]} />
                    </HStack>
                    <HStack>
                        {
                            user.role !== "admin" && (
                                <HStack>
                                    <Text children="Subscription" fontWeight={"bold"} />
                                    {
                                        user.subscription && user.subscription.status==="active"?(<Button onClick={cancelSubscriptionHandler} color={"yellow.500"} variant={"unstyled"}>Cancel Subscription</Button>):(
                                            <Link to="/subscribe">
                                            <Button colorScheme='yellow'>
                                                Subscribe   
                                            </Button>
                                            </Link>
                                        )
                                    }
                                </HStack>
                            )
                        }
                    </HStack>
                    <Stack direction={["column", "row"]} alignItems={"center"}>
                        <Link to='/updateprofile'>
                            <Button>Update Profile</Button>
                        </Link>
                        <Link to='/changepassword'>
                            <Button>Change Password</Button>
                        </Link>
                    </Stack>
                </VStack>
            </Stack>
            <Heading children="Playlist" size={"md"} my={"8"} />
            {
                user.playlist.length > 0 && (
                    <Stack direction={["column", "row"]} alignItems={"center"} flexWrap={"wrap"} p={"4"}>
                        
                        {
                            user.playlist.map((element)=>(
                                <VStack w="48" m={"2"} key={element.course}>
                                    <Image boxSize={"full"} objectFit={"contain"} src={element.poster} />
                                    <HStack>
                                        <Link to={`/course/${element.course}`}>
                                            <Button variant={"ghost"} colorScheme='yellow'>
                                                Watch Now
                                            </Button>
                                        </Link>
                                        <Button isLoading={loading} onClick={()=>removeFromPlaylistHandler(element.course)}>
                                            <RiDeleteBinFill />
                                        </Button>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                ) 
            }

            <ChangePhotoBox loading={loading} changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}  />
        </Container>
    )
}

export default Profile
function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler,loading}){
    const [imagePrev,setImagePrev] = useState('')
    const [image,setImage] = useState('')
    const changeImage = (e) => {
        const file = e.target.files[0];
        console.log(file)
        const reader =new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImagePrev(reader.result);
          setImage(file);
        }
    }

    const closeHandler = () => {
        onClose();
        setImagePrev('');
          setImage('');

    }
    
    return(
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={"blur(10px)"} />
            <ModalContent>
                <ModalHeader>
                    Change Photo
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e)=>{changeImageSubmitHandler(e,image)}}>
                            <VStack spacing={"8"}>
                                {imagePrev && <Avatar src={imagePrev} boxSize={"48"} />}
                                <Input onChange={changeImage} type='file' css={{"&::file-selector-button":fileUploadCss}} />
                                <Button isLoading={loading} w="full" colorScheme="yellow" type='submit'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeHandler} mr={"3"}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}