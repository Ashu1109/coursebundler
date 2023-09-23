import { Container, HStack, Button, Heading, Input, Text, Stack, VStack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount }) => {
  return (
    <VStack className='course' alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading size={'sm'} textAlign={['center','left']} maxW='200px' fontFamily={'sans-serif'} noOfLines={3} children={title} />
      <Text children={description} noOfLines={2} />
      <HStack>
      <Text fontWeight={'bold'} textTransform={'uppercase'} children={'Creator'} noOfLines={2} />
      <Text fontFamily={'body'} textTransform={'uppercase'} children={creator} noOfLines={2} />
        
      </HStack>
      <Heading textAlign={'center'} size={'xs'} children={`Lectures - ${lectureCount}`} textTransform={'uppercase'}/>
      <Heading size={'xs'} children={`Views - ${views}`} textTransform={'uppercase'}/>
      <Stack direction={['column','row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme='yellow'>Watch Now</Button>
          <Button variant={'ghost'} colorScheme='yellow' onClick={()=>{addToPlaylistHandler(id)}}>Add to playlist</Button>
        </Link>
      </Stack>
    </VStack>
  )
}


const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('')
  const categories = ["Web development", "Artificial", "Intelliegence", "Data Structure & Algorithm", "App Development", "Data Science", "Game Development"]
  const addToPlaylistHandler = () => {
    console.log("Adder to palylist");
  }
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'} >

      <Heading children="All Courses" m={'8'} />
      <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder='Search a course' type='text' focusBorderColor='yellow.500' />
      <HStack overflowX={'auto'} paddingY={'8'} css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => { setCategory(item) }} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course

          title={"Sample1"}
          description={"Sample1"}
          views={23}
          imageSrc={"Sample1"}
          id={"Sample1"}
          creator={"Sample1 boy"}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}

        />
      </Stack>
    </Container>
  )
}

export default Courses