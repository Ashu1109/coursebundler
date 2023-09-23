import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assets/videos/intro.mp4'
const CoursePage = () => {
    const [lectureNumber,setLectureNumber] = useState(0);
    const lectures=[
        {
            _id:"wfkwkfwr",
            title:"Sample1",
            description:"lwkfnwkfwprfjwprk;f",
            video:{
                url:"jhfjh"
            }
        },
        {
            _id:"wfkwfwr",
            title:"Sample2",
            description:"lwkfnwkfwprfjwprk;f",
            video:{
                url:"jhfjh"
            }
        },
        {
            _id:"wfkwkwr",
            title:"Sample3",
            description:"lwkfnwkfwprfjwprk;f",
            video:{
                url:"jhfjh"
            }
        },
        {
            _id:"wwkfwr",
            title:"Sample4",
            description:"lwkfnwkfwprfjwprk;f",
            video:{
                url:"jhfjh"
            }
        },
]
  return (
    <Grid minH={"90vh"} templateColumns={["1fr","3fr 1fr"]}>
        <Box>
            <video width={"100%"} controls autoPlay disablePictureInPicture disableRemotePlayback controlsList='nodownload noremoteplayback' src={introVideo}>

                </video>
                <Heading m={"4"} children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} />
                <Heading m={"4"} children="Description" />
                <Text m="4" children={lectures[lectureNumber].description}>
                    
                </Text>
        </Box>
        <VStack>
            {
                lectures.map((item,index)=>(
                    <button onClick={()=>{setLectureNumber(index)}} style={{width:"100%", padding:"1rem",textAlign:"center",margin:"0",borderBottom:"1px solid rgba(0,0,0,0.2)"}}  key={item._id}><Text noOfLines={1}>#{index+1} {item.title}</Text></button>
                ))
            }
        </VStack>
    </Grid>
  )
}

export default CoursePage