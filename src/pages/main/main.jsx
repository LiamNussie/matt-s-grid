import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";


const data = [
    {
        name: "AA",
        fill: 100
    },
    {
        name: "AKs",
        fill: 100
    },
    {
        name: "AQs",
        fill: 100
    },
    {
        name: "AJs",
        fill: 100
    },
    {
        name: "ATs",
        fill: 100
    },
    {
        name: "A9s",
        fill: 100
    },
    {
        name: "A8s",
        fill: 100
    },
    {
        name: "A7s",
        fill: 100
    },
    {
        name: "A6s",
        fill: 100
    },
    {
        name: "A5s",
        fill: 100
    },
    {
        name: "A4s",
        fill: 100
    },
    {
        name: "A3s",
        fill: 45
    },
    {
        name: "A2s",
        fill: 0
    },
    {
        name: "AKo",
        fill: 100
    },
    {
        name: "KK",
        fill: 100
    },
    {
        name: "KQs",
        fill: 100
    },
    {
        name: "KJs",
        fill: 100
    },
    {
        name: "KTs",
        fill: 100
    },
    {
        name: "K9s",
        fill: 100
    },
    {
        name: "K8s",
        fill: 20
    },
    {
        name: "K7s",
        fill: 0
    },
    {
        name: "K6s",
        fill: 0
    },
    {
        name: "K5s",
        fill: 0
    },
    {
        name: "K4s",
        fill: 0
    },
    {
        name: "K3s",
        fill: 0
    },
    {
        name: "K2s",
        fill: 0
    },
    {
        name: "AQo",
        fill: 100
    },
    {
        name: "KQo",
        fill: 100
    },
    {
        name: "QQ",
        fill: 100
    },
    {
        name: "QJs",
        fill: 100
    },
    {
        name: "QTs",
        fill: 100
    },
    {
        name: "Q9s",
        fill: 100
    },
    {
        name: "Q8s",
        fill: 0
    },
    {
        name: "Q7s",
        fill: 0
    },
    {
        name: "Q6s",
        fill: 0
    },
    {
        name: "Q5s",
        fill: 0
    },
    {
        name: "Q4s",
        fill: 0
    },
    {
        name: "Q3s",
        fill: 0
    },
    {
        name: "Q2s",
        fill: 0
    },
    {
        name: "AJo",
        fill: 100
    },
    {
        name: "KJo",
        fill: 47
    },
    {
        name: "QJ",
        fill: 20
    },
    {
        name: "JJo",
        fill: 100
    },
    {
        name: "JTs",
        fill: 100
    },
    {
        name: "J9s",
        fill: 100
    },
    {
        name: "J8s",
        fill: 0
    },
    {
        name: "J7s",
        fill: 0
    },
    {
        name: "J6s",
        fill: 0
    },
    {
        name: "J5s",
        fill: 0
    },
    {
        name: "J4s",
        fill: 0
    },
    {
        name: "J3s",
        fill: 0
    },
    {
        name: "J2s",
        fill: 0
    },
    {
        name: "ATo",
        fill: 20
    },
    {
        name: "KTo",
        fill: 0
    },
    {
        name: "QTo",
        fill: 0
    },
    {
        name: "JTo",
        fill: 20
    },
    {
        name: "TT",
        fill: 100
    },
    {
        name: "T9s",
        fill: 100
    },
    {
        name: "T8s",
        fill: 78
    },
    {
        name: "T7s",
        fill: 0
    },
    {
        name: "T6s",
        fill: 0
    },
    {
        name: "T5s",
        fill: 0
    },
    {
        name: "T4s",
        fill: 0
    },
    {
        name: "T3s",
        fill: 0
    },
    {
        name: "T2s",
        fill: 0
    },
    {
        name: "A9o",
        fill: 0
    },
    {
        name: "K9o",
        fill: 0
    },
    {
        name: "Q9o",
        fill: 0
    },
    {
        name: "J9o",
        fill: 0
    },
    {
        name: "T9o",
        fill: 0
    },
    {
        name: "99",
        fill: 100
    },
    {
        name: "98s",
        fill: 47
    },
    {
        name: "97s",
        fill: 0
    },
    {
        name: "96s",
        fill: 0
    },
    {
        name: "95s",
        fill: 0
    },
    {
        name: "94s",
        fill: 0
    },
    {
        name: "93s",
        fill: 0
    },
    {
        name: "92s",
        fill: 0
    },
    {
        name: "A8o",
        fill: 0
    },
    {
        name: "K8o",
        fill: 0
    },
    {
        name: "Q8o",
        fill: 0
    },
    {
        name: "J8o",
        fill: 0
    },
    {
        name: "T8o",
        fill: 0
    },
    {
        name: "98o",
        fill: 0
    },
    {
        name: "88",
        fill: 100
    },
    {
        name: "87s",
        fill: 20
    },
    {
        name: "86s",
        fill: 0
    },
    {
        name: "85s",
        fill: 0
    },
    {
        name: "84s",
        fill: 0
    },
    {
        name: "83s",
        fill: 0
    },
    {
        name: "82s",
        fill: 0
    },
    {
        name: "A7o",
        fill: 0
    },
    {
        name: "K70",
        fill: 0
    },
    {
        name: "Q7o",
        fill: 0
    },
    {
        name: "J7o",
        fill: 0
    },
    {
        name: "T7o",
        fill: 0
    },
    {
        name: "97o",
        fill: 0
    },
    {
        name: "87o",
        fill: 0
    },
    {
        name: "77",
        fill: 100
    },
    {
        name: "76s",
        fill: 20
    },
    {
        name: "75s",
        fill: 0
    },
    {
        name: "74s",
        fill: 0
    },
    {
        name: "73s",
        fill: 0
    },
    {
        name: "72s",
        fill: 0
    },
    {
        name: "A6o",
        fill: 0
    },
    {
        name: "K6o",
        fill: 0
    },
    {
        name: "Q6o",
        fill: 0
    },
    {
        name: "J6o",
        fill: 0
    },
    {
        name: "T6o",
        fill: 0
    },
    {
        name: "96o",
        fill: 0
    },
    {
        name: "86o",
        fill: 0
    },
    {
        name: "76o",
        fill: 0
    },
    {
        name: "66",
        fill: 100
    },
    {
        name: "65s",
        fill: 20
    },
    {
        name: "64s",
        fill: 0
    },
    {
        name: "63s",
        fill: 0
    },
    {
        name: "62s",
        fill: 0
    },
    {
        name: "A5o",
        fill: 0
    },
    {
        name: "K5o",
        fill: 0
    },
    {
        name: "Q5o",
        fill: 0
    },
    {
        name: "J5o",
        fill: 0
    },
    {
        name: "T5o",
        fill: 0
    },
    {
        name: "95o",
        fill: 0
    },
    {
        name: "85o",
        fill: 0
    },
    {
        name: "75o",
        fill: 0
    },
    {
        name: "65o",
        fill: 0
    },
    {
        name: "55",
        fill: 100
    },
    {
        name: "54s",
        fill: 0
    },
    {
        name: "53s",
        fill: 0
    },
    {
        name: "52s",
        fill: 0
    },
    {
        name: "A4o",
        fill: 0
    },
    {
        name: "K4o",
        fill: 0
    },
    {
        name: "Q4o",
        fill: 0
    },
    {
        name: "J4o",
        fill: 0
    },
    {
        name: "T4o",
        fill: 0
    },
    {
        name: "94o",
        fill: 0
    },
    {
        name: "84o",
        fill: 0
    },
    {
        name: "74o",
        fill: 0
    },
    {
        name: "64o",
        fill: 0
    },
    {
        name: "54o",
        fill: 0
    },
    {
        name: "44",
        fill: 78
    },
    {
        name: "43s",
        fill: 0
    },
    {
        name: "42s",
        fill: 0
    },
    {
        name: "A3o",
        fill: 0
    },
    {
        name: "K3o",
        fill: 0
    },
    {
        name: "Q3o",
        fill: 0
    },
    {
        name: "J3o",
        fill: 0
    },
    {
        name: "T3o",
        fill: 0
    },
    {
        name: "93o",
        fill: 0
    },
    {
        name: "83o",
        fill: 0
    },
    {
        name: "73o",
        fill: 0
    },
    {
        name: "63o",
        fill: 0
    },
    {
        name: "53o",
        fill: 0
    },
    {
        name: "43o",
        fill: 0
    },
    {
        name: "33",
        fill: 47
    },
    {
        name: "32s",
        fill: 0
    },
    {
        name: "A2o",
        fill: 0
    },
    {
        name: "K2o",
        fill: 0
    },
    {
        name: "Q2o",
        fill: 0
    },
    {
        name: "J2o",
        fill: 0
    },
    {
        name: "T2o",
        fill: 0
    },
    {
        name: "92o",
        fill: 0
    },
    {
        name: "82o",
        fill: 0
    },
    {
        name: "72o",
        fill: 0
    },
    {
        name: "62o",
        fill: 0
    },
    {
        name: "52o",
        fill: 0
    },
    {
        name: "42o",
        fill: 0
    },
    {
        name: "32o",
        fill: 0
    },
    {
        name: "22",
        fill: 47
    },
    
]


const Main = () => {
    const [clicked, setClicked] = useState(false);

    const handleHover = index => {
        if(clicked === index) {
        return setClicked(null)
        }
        setClicked(index)
    }
    return (
        <Box>
            <Flex wrap={"wrap"}>
                {data.map(({name, fill}, index) => {
                    return (
                        <Box position={"relative"} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover("ysy")} bg="#4D7BB4" border={".5px solid #000"} flex="1" key={index} height="57.3px" flexBasis={"110px"}>
                            {clicked === index ? <Box position={"absolute"} top="0" bottom={"0"} left="0" right={"0"} bg="rgba(0,0,0,.2)"></Box> : null}
                            <Box zIndex={"1"} bg="#DD4C45" width={`${fill}%`} height="100%"></Box> 
                            <Text position={"absolute"} top="4%" left={"10%"} textShadow={"0px 2px 2px rgba(0, 0, 0, 0.33)"} color={"#FFF"} fontSize="1.3rem">{name}</Text>
                        </Box>
                    )
                })}
            </Flex>
        </Box>
    )
}

export default Main;