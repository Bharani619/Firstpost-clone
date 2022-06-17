import {useRef} from 'react';
import styles from '../styles/sideBar.module.css'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

  export const SideBar=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
      <ChakraProvider>
        <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
        <span style={{fontSize:"25px"}}><i class="fas fa-align-justify"></i></span>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody style={{padding:'0',marginTop:"5%"}}>
               <div className={styles.mainContainer}>
                <div className={styles.containerOne}>
                     <div>
                      <span><i class="fas fa-indent"></i></span>
                      <p>Sections</p>
                     </div>
                     <div>
                     <span><i class="far fa-copy"></i></span>
                      <p>More</p>
                     </div>
                     <div>
                     <span><i class="fas fa-tv"></i></span>
                      <p>Shows</p>
                     </div>
                     <div>
                     <span><i class="fab fa-cc-discover"></i></span>
                      <p>F.Brands</p>
                     </div>
                </div>
                <div className={styles.containerTwo}>
                  <div><Link to="/">Home</Link></div>
                  <div><Link to="/Health">Health</Link></div>
                  <div><Link to="/India">India</Link></div>
                  <div><Link to="/World">World</Link></div>
                  <div><Link to="/Politics">Politics</Link></div>
                  <div><Link to="/arts">Arts & Culture</Link></div>
                  <div><Link to="/auto">Auto</Link></div>
                  <div><Link to="/opinion">Opinion</Link></div>
                  <div><Link to="/Sports">Sports</Link></div>
                  <div><Link to="/Cricket">Cricket</Link></div>
                  <div><Link to="/Entertainment">Entertainment</Link></div>
                  <div><Link to="/Tech">Tech</Link></div>
                  <div><Link to="/Photos">Photos</Link></div>
                  <div><Link to="/Videos">Videos</Link></div>
                  <div><Link to="/Buisness">Buisness</Link></div>
                </div>
               </div>
               <div className={styles.ContainerThree}>
                <div><i class="fab fa-facebook"></i></div>
                <div><i class="fab fa-twitter"></i></div>
                <div><i class="fab fa-instagram"></i></div>
                <div><i class="fab fa-youtube"></i></div>
               </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        </ChakraProvider>
      </>
    )
  }