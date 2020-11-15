import React, { useContext } from "react";
import { Box, Image, Text, Heading, ResponsiveContext } from "grommet";
import "./Card.css";
import { trimDescription } from "../../utilities/MainUtility";


function MovieCard(props) {
  let bgImage =
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg";
  return (
    <Box className="container">
      <Image src={bgImage} className="bg" />
      <Box className="info">
        <Box className="info-container">
          <Box>
            <Heading level={2}>Movie size {} </Heading>
          </Box>
          <Box>
            <Text className="info-description">
              {trimDescription(`14 years after making a film about his journey across the 
           USA, Borat risks life and limb when he returns to the United States with his young daughter, and
            reveals more about the culture, the COVID-19 pandemic, and the political elections`)}
            </Text>
          </Box>
          <Box>
            <input
              type="text"
              id="name"
              onChange={(e) => {
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        overflow="hidden"
        className="info-button"
        justify="center"
        align="center"
      >
        <Text
          style={{
            fontSize: "90%",
          }}
          onClick={() => {
            console.log("hello");
          }}
        >
          Know More
        </Text>
      </Box>
    </Box>
  );
}

export default MovieCard;
