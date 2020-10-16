import { Box, Text, Heading, List, ListItem } from '@chakra-ui/core';

export default function Home() {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxWidth={1280}
      margin="0 auto"
      p={20}
      textAlign="center">
      <Heading as="h1" size="2xl">
        Interview project for Front-End position at Mentors Land.
      </Heading>
      <Box p={20}>
        <Heading as="h2" size="lg">
          What is the purpose of this test?
        </Heading>
        <Text>
          We want to know your capacity for resolution and investigation. We will take into account
          the following points:
        </Text>
        <List styleType="disc">
          <ListItem>Prolity of the code delivered.</ListItem>
          <ListItem>Proactivity and use of both Next and Chakra UI APIs.</ListItem>
          <ListItem>
            Project organization, how do you order its components? What do you call them?
          </ListItem>
        </List>
      </Box>
      <Text>Front-End Mentors Land position interview</Text>
    </Box>
  );
}
