import React, { useContext, useEffect } from "react";
//import SiteHeader from "./components/SiteHeader/SiteHeader";
import MovieCard from "./components/card/MovieCard";

import { Box, ResponsiveContext  } from "grommet";
import {useRecoilState} from 'recoil';
import { windowSize,tvGeners,movieGeners,numberSize } from "./recoilStore/store";
import { getGeners, numSizeAdjust } from "./utilities/MainUtility";
import { MV, small, TV, two } from "./globalConfig/APISupport";


function App() {

const size = useContext(ResponsiveContext);
// eslint-disable-next-line no-unused-vars
const [globalsize,setGlobalsize]= useRecoilState(windowSize);
// eslint-disable-next-line no-unused-vars
const [tvgeners,settvg]= useRecoilState(tvGeners);
// eslint-disable-next-line no-unused-vars
const [moviegeners,setmvg]= useRecoilState(movieGeners);
const [numSize,setNumSize]= useRecoilState(movieGeners);

useEffect(() => {
  setGlobalsize(size);
  numSizeAdjust(size,setNumSize);
}, [size])

useEffect(()=>{
  getGeners(TV,settvg);
  getGeners(MV,setmvg);
},[]);
  return (     
        <Box gap={small}>       
         { numSize<two?<Box>This is on smallscreen</Box>:<MovieCard/>         
         }
        </Box>
  
  );
}

export default App;
