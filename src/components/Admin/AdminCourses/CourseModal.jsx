import {
    Box,
    Button,
    Grid,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register'
const CourseModal = ({ isOpen, onClose, id, deleteButtonHandler, addLectureHandler, courseTitle, lectures = [],loading }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [videoPrev, setVideoPrev] = useState('');
    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        console.log(file)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setVideoPrev(reader.result);
            setVideo(file);
        }
    }
    const handleClose = ( ) =>{
        setVideoPrev('');
        setVideo('');
        setDescription('');
        setTitle('');
        onClose();
    }
    return (
        <Modal isOpen={isOpen} onClose={handleClose} size={'full'} scrollBehavior='outside'>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton/>
                <ModalHeader>{courseTitle}</ModalHeader>
                <ModalBody p={'16'}>
                    <Grid templateColumns={['1fr', '3fr 1fr']}>
                        <Box px={['0', '16']}>
                            <Box my={'5'}>
                                <Heading children={courseTitle} />
                                <Heading children={`#${id}`} size={'sm'} opacity={'0.4'} />
                            </Box>
                            <Heading children={`Lectures`} size={'lg'} />
                            {
                                lectures.map((item,index)=>(
                                <VideoCard
                                key={index}
                                    title={item.title}
                                    description={
                                        item.description
                                    }
                                    num={index+1}
                                    lectureId={item._id}
                                    courseId={id}
                                    deleteButtonHandler={deleteButtonHandler}
                                    loading={loading}
                                />))
                            }
                        </Box>
                        <Box>
                            <form onSubmit={e => addLectureHandler(e, title, description, video)}>
                                <VStack spacing={"4"}>
                                    <Heading children="Add Lecture" size={"md"} textTransform={"uppercase"} />
                                    <Input focusBorderColor="purple.300" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                                    <Input focusBorderColor="purple.300" placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />
                                    <Input
                                        accept='video/mp4'
                                        type="file"
                                        focusBorderColor="purple.500"
                                        required
                                        css={{
                                            "&::file-selector-button": { ...fileUploadCss, color: "purple" }
                                        }}
                                        onChange={changeVideoHandler}
                                    />
                                    {
                                        videoPrev && (
                                            <video controlsList='nodownload' controls src={videoPrev}  />
                                        )
                                    }
                                    <Button w="full" colorScheme='purple' type='submit'>
                                        Upload
                                    </Button>
                                </VStack>

                            </form>
                        </Box>
                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CourseModal;

function VideoCard({
    title,
    description,
    num,
    lectureId,
    courseId,
    deleteButtonHandler,
}) {
    return (
        <Stack
            direction={['column', 'row']}
            my={'8'}
            borderRadius={'lg'}
            boxShadow={`0 0 10px rgba(107,70,193,0.5)`}
            justifyContent={['flex-start', 'space-between']}
            p={['4', '8']}
        >
            <Box>
                <Heading size={'md'} children={`#${num} ${title}`} />
                <Text children={description} />
            </Box>
            <Button
                color={'purple.600'}
                onClick={() => {
                    deleteButtonHandler(courseId, lectureId);
                }}
            >
                <RiDeleteBin7Fill />
            </Button>
        </Stack>
    );
}
