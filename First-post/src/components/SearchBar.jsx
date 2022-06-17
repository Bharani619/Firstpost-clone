import React from 'react'
import { Box,Fade, ScaleFade, Slide, SlideFade,Button, ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSearchData } from '../Reducer/action';

export const SearchBar = () => {
    const [q, setQ] = useState('');  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isOpen, onToggle } = useDisclosure();

    const handlePress = (e)=>{
      if(e.code==="Enter"){
        dispatch(fetchSearchData(q));
        navigate('/SearchPage')
      }
    }
  return (
    <>
    <ChakraProvider>
    <Button style={{background:"none"}} onClick={onToggle}>
        <span style={{color:"grey",fontSize:"20px"}}><i class="fas fa-search"></i></span>
    </Button>
    <Slide direction='top' in={isOpen} style={{ zIndex: 10,width:"40%",margin:'auto' }}>
      <Box
        p='4px'
        color='white'
        mt='4'
        bg='black'
        rounded='md'
        shadow='md'
      >
        <input style={{width:"100%",background:"none",border:"1px solid grey"}} type="text" value={q} onKeyPress={handlePress} onChange={(e)=>setQ(e.target.value)} />
      </Box>
    </Slide>
    </ChakraProvider>
  </>
  )
}
