import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Typography } from '@mui/material'
import React from 'react'
import './homePageHeader.css'
import avatarIcon from '../header/avatar.png'

function HomePageHeader () {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2' className='userInfoContainer'>
                <Typography className='userName'>Hello Athen</Typography>
                <Typography className='greeting'>What are you reading today?</Typography>
            </Box>
            <Spacer />
            <img src={avatarIcon} className='avatar'></img>
        </Flex>
    )
}

export default HomePageHeader