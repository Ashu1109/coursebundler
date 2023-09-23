import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import cursor from "../../../assets/images/cursor.png"
import { RiDeleteBin7Fill } from 'react-icons/ri';
import img from '../../../assets/images/bg.png'
import CourseModal from './CourseModal';
const AdminCourses = () => {
  const {isOpen,onClose,onOpen} = useDisclosure();
  const courses = [{
    _id: "qe.knfleqkndfwelknflwkrnflwrmsnflw",
    title: "React Course",
    category: "Web Development",
    createdBy:"Aayush Kumar",
    views:100,
    numOfVideos:2,
    poster:{
      url:img
    }
  }]
  const addLectureHandler = (e,courseId,title,description,video) =>{
    e.preventDefault();
  }
  const courseDetailHandler = (userId) => {
    onOpen();
    console.log(userId)
  }
  const deleteButtonHandler = (userId) => {
    console.log(userId)
  }

  const deleteLectureButtonHandler = (courseId,lectureId) => {
    console.log(courseId,lectureId)
  }
  return (
    <Grid css={{
      cursor: `url(${cursor}) ,default`
    }} minH={"100vh"} templateColumns={["1fr", "7fr 1fr"]}>
      <Box p={["0", "16"]} overflowX={"auto"}>
        <Heading textTransform={"uppercase"} children="All Courses" my={'16'} textAlign={["center", "left"]} />
        <TableContainer w={['100vh', "full"]}>
          <Table variant={"simple"} size={"lg"}>
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric >Views</Th>
                <Th isNumeric >Lectures</Th>
                <Th isNumeric >Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                courses.map(item => (<Row courseDetailHandler={courseDetailHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />))
              }
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal id={"nnbgtjebgjeetg"} courseTitle={"React Course"} isOpen={isOpen} onClose={onClose} deleteLectureButtonHandler={deleteLectureButtonHandler} addLectureHandler={addLectureHandler}/>
      </Box>
      <Sidebar />
    </Grid>
  )
};

export default AdminCourses

function Row({ item, courseDetailHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td><Image src={item.poster.url} /></Td>
      <Td>{item.title}</Td>
      <Td textTransform="uppercase">{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric >{item.views}</Td>
      <Td isNumeric >{item.numOfVideos}</Td>


      <Td isNumeric >
        <HStack justifyContent={"flex-end"}>
          <Button onClick={() => { courseDetailHandler(item._id) }} variant={"outline"} color={"purple.500"}>View  Lectures</Button>
          <Button onClick={() => { deleteButtonHandler(item._id) }} color={"purple.600"}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}