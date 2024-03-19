import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // return null;
  return (
    <VStack bg="white" borderRadius="lg" overflow="hidden" justify="flex-start" align="flex-start">      
      <Image src={imageSrc} alt={title} borderRadius="lg"/>
      <VStack spacing="2" align="flex-start" pl="4">
        <Heading as="h2" size="md" textAlign="left" color="black">{title}</Heading>
        <Text textAlign="left" color="black">{description}</Text>
        <HStack spacing="2" align="center" w="100%">
          <Text textAlign="left" color="black" fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
