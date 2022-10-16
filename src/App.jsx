import { useState } from 'react';
import { Button, ButtonGroup, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import './App.css';
import './sApp.scss';
import Main from './pages/main/main';
import ArrowDown from './assets/arrowDown.svg';
import Info from './assets/info.svg';
import Heart from './assets/heart.svg';
import Tree from './assets/tree.svg';
import Diamond from './assets/diamond.svg';
import Ace from './assets/ace.svg';
import Range from './assets/rangeHeight.svg';
import Full from './assets/fullHeight.svg';
import Normalized from './assets/normalized.svg';
import Vertical from './assets/vertical.svg';
import Horizontal from './assets/horizontal.svg';



function App() {
  const [option, setOption] = useState("ALL");
  const [option2, setOption2] = useState(Range);
  const [option3, setOption3] = useState("include");

  return (
    <div className="App">
      <Flex padding={"0 .2rem"} height={"47px"} bg="#18181B"justifyContent={"space-between"}>

      <Flex>
      <Menu>
        <MenuButton fontWeight={"400"} _hover={{backgroundColor: "#272727"}} _active={{backgroundColor: "#272727"}} cursor={"pointer"} color="#FFF" bg="#272727" marginTop="4px" padding={"1.3rem 4rem 1.3rem 3rem"} width="300px" borderBottom={"1.5px solid #4DA96C"} borderRadius="4px 4px 0px 0px" as={Button} rightIcon={<Image src={ArrowDown} />}>
          {option}
        </MenuButton>
        <MenuList borderRadius={"0"} paddingBottom="0" transform="translate(-5rem, -.5rem) !important" bg="#1E1E1E" color="#F4F4F5" boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.18)"} border="none">
          <MenuItem onClick={() => setOption("STRATEGY")} _hover={{background: "#2F2F2F"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>STRATEGY</MenuItem>
          <MenuItem onClick={() => setOption("STRATEGY + EV")} _hover={{background: "#2F2F2F"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>STRATEGY + EV</MenuItem>
          <MenuItem onClick={() => setOption("EV")} _hover={{background: "#2F2F2F"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>EV</MenuItem>
          <MenuItem onClick={() => setOption("EQUITY")} _hover={{background: "#2F2F2F"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>EQUITY</MenuItem>
          <MenuItem onClick={() => setOption("EQR")} _hover={{background: "#2F2F2F"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>EQR</MenuItem>
          <MenuItem onClick={() => setOption("BLOCKERS")} _hover={{background: "#2F2F2F"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>BLOCKERS</MenuItem>
          <MenuItem onClick={() => setOption("RANGE")} _hover={{background: "#2F2F2F"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>RANGE</MenuItem>
          <MenuItem _hover={{background: "#2F2F2F"}} bg="#2F2F2F" fontSize=".85rem" _focus={{background: "#2F2F2F"}} pl="1.2rem"><Image mr="2" src={Info} />Help</MenuItem>
        </MenuList>
      </Menu>

      <Flex marginLeft={"1px"} color={"#FFF"} alignItems={"center"}>
          <Text mt="4px" width={"250px"} borderRadius="4px 4px 0px 0px" height="43px" textAlign="center" padding={".68rem 1rem"} _hover={{backgroundColor: "#272727", borderBottom: "1.5px solid #4DA96C"}} cursor={"pointer"}>RANGES</Text>
          <Text mt="4px" width={"250px"} borderRadius="4px 4px 0px 0px" height="43px" textAlign="center" padding={".68rem 1rem"} _hover={{backgroundColor: "#272727", borderBottom: "1.5px solid #4DA96C"}} cursor={"pointer"}>BREAKDOWN</Text>
          <Text mt="4px" width={"250px"} borderRadius="4px 4px 0px 0px" height="43px" textAlign="center" padding={".68rem 1rem"} _hover={{backgroundColor: "#272727", borderBottom: "1.5px solid #4DA96C"}} cursor={"pointer"}>REPORTS</Text>
      </Flex>
      </Flex>

      <Flex alignItems={"center"} gap=".45rem" pr=".2rem">
        <ButtonGroup bg="#2F2F2F" borderRadius="4px" size='sm' isAttached variant='outline'>
          <IconButton _hover={{background: "#2F2F2F"}} _active={{background: "#2F2F2F"}} border="none" borderRight="1px solid #52525B" icon={<Image transform="scale(.8)" src={Heart} />} />
          <Menu>
            <MenuButton _hover={{background: "#2F2F2F"}} _active={{background: "#2F2F2F"}} border="none" width={"32px"} as={IconButton} rightIcon={<Image transform={"translateX(-11px)"} src={ArrowDown} />}></MenuButton>
            <MenuList fontSize={".9rem"} borderRadius={"0"} paddingBottom="0" transform="translateY(-.5rem) !important" bg="#1E1E1E" color="#F4F4F5" width={"50px !important"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.18)"} border="none">
              <Flex padding="1rem 1rem 0 1rem"  ml={2} gap =".9rem" wrap={"wrap"}>
                <Image src={Ace} />
                <Image src={Heart} />
                <Image src={Diamond} />
                <Image src={Tree} />
                <Image src={Ace} />
                <Image src={Heart} />
                <Image src={Diamond} />
                <Image src={Tree} />
                <Image src={Ace} />
                <Image src={Heart} />
                <Image src={Diamond} />
                <Image src={Tree} />
              </Flex>
              <Flex fontSize={".8rem"} mt={5}>
                <Text onClick={() => setOption3("include")} cursor={"pointer"} textAlign={"center"} padding=".3rem 0" flex={"1"} bg={option3 === "include" ? "#3F3F3F" : "#272727"} borderTop={option3 === "include" ? "1px solid #4DA96C" : "1px solid #3F3F46"}>INCLUDE</Text>
                <Text onClick={() => setOption3("exclude")} cursor={"pointer"} bg={option3 === "exclude" ? "#3F3F3F" : "#272727"} textAlign={"center"} padding=".3rem 0" flex={"1"} borderTop={option3 === "exclude" ? "1px solid #4DA96C" : "1px solid #3F3F46"}>EXCLUDE</Text>
              </Flex>
            </MenuList>
          </Menu>
        </ButtonGroup>
        
        <ButtonGroup bg="#2F2F2F" borderRadius="4px" size='sm' isAttached variant='outline'>
          <IconButton _hover={{background: "#2F2F2F"}} _active={{background: "#2F2F2F"}} border="none" borderRight="1px solid #52525B" icon={<Image transform="scale(.7)" src={option2} />} />
          <Menu>
            <MenuButton _hover={{background: "#2F2F2F"}} _active={{background: "#2F2F2F"}} border="none" width={"32px"} as={IconButton} rightIcon={<Image transform={"translateX(-11px)"} src={ArrowDown} />}></MenuButton>
            <MenuList borderRadius={"0"} paddingBottom="0" fontSize={".9rem"} transform="translate(.4rem, -.5rem) !important" bg="#1E1E1E" color="#F4F4F5" boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.18)"} border="none">
              <MenuItem onClick={() => setOption2(Range)} className='mitem' _hover={{background: "#2F2F2F", color: "#4DA96C"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className='one' y="11" width="22" height="11" fill="#F4F4F5"/>
                <rect className='two' x="0.5" y="0.5" width="21" height="21" rx="1.5" stroke="#F4F4F5"/>
                </svg>
                RANGE HEIGHT
              </MenuItem>
              <MenuItem onClick={() => setOption2(Full)} className='mitem' _hover={{background: "#2F2F2F", color: "#4DA96C"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className='one' width="22" height="22" rx="2" fill="#F4F4F5"/>
                </svg>
                FULL HEIGHT
              </MenuItem>
              <MenuItem onClick={() => setOption2(Normalized)} className='mitem' _hover={{background: "#2F2F2F", color: "#4DA96C"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_262_2865)">
                <path className='path' d="M1 2L20 21H1V2Z" fill="#F4F4F5" stroke="#F4F4F5"/>
                </g>
                <rect className='two' x="21.5" y="0.5" width="21" height="21" rx="1.5" transform="rotate(90 21.5 0.5)" stroke="#F4F4F5"/>
                <defs>
                <clipPath id="clip0_262_2865">
                <rect className='one' x="22" width="22" height="22" rx="2" transform="rotate(90 22 0)" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                NORMALIZED
              </MenuItem>
              <MenuItem onClick={() => setOption2(Vertical)} className='mitem' _hover={{background: "#2F2F2F", color: "#4DA96C"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>
                <svg style={{transform: "rotate(90deg) scale(.8)"}} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className='one' y="11" width="22" height="11" fill="#F4F4F5"/>
                <rect className='two' x="0.5" y="0.5" width="21" height="21" rx="1.5" stroke="#F4F4F5"/>
                </svg>
                VERTICAL
              </MenuItem>
              <MenuItem onClick={() => setOption2(Horizontal)} className='mitem' _hover={{background: "#2F2F2F", color: "#4DA96C"}} _focus={{background: "#2F2F2F"}} pl="1.2rem" mb={2}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className='one' y="11" width="22" height="11" fill="#F4F4F5"/>
                <rect className='two' x="0.5" y="0.5" width="21" height="21" rx="1.5" stroke="#F4F4F5"/>
                </svg>
                HORIZONTAL
              </MenuItem>
              <MenuItem _hover={{background: "#2F2F2F"}} bg="#2F2F2F" fontSize=".85rem" _focus={{background: "#2F2F2F"}} pl="1.2rem"><Image mr="2" src={Info} />Help</MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>
       
      </Flex>
      
      </Flex>
      <Main />
    </div>
  );
}

export default App;
