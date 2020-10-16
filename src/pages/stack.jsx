import { Box, Text, Heading, List, ListItem, ListIcon, Link } from '@chakra-ui/core';

import MainLayout from 'layouts/Main';

export default function Home() {
  return (
    <MainLayout>
      <Heading as="h1" size="2xl" textAlign="center" maxWidth={700}>
        What is the stack of technologies that we use?
        <span role="img" aria-label="Mate emoji">
          🧉
        </span>{' '}
      </Heading>
      <Box pt={10} w="100%" maxWidth={950}>
        <Heading as="h2" size="lg" mb={5}>
          Very interesting question.
        </Heading>
        <Text mb={5}>
          We leave you below a list with links so that you can study the documentation in case you
          need a point of reference:
        </Text>
        <List styleType="disc" spacing={3}>
          <ListItem>
            <Link href="https://nextjs.org/" isExternal fontWeight="bold">
              NextJS
            </Link>{' '}
            <span role="img" aria-label="Wizard emoji">
              🧙🏼‍♂️
            </span>
          </ListItem>
          <ListItem>
            <Link href="https://chakra-ui.com/" isExternal fontWeight="bold">
              Chakra UI
            </Link>{' '}
            <span role="img" aria-label="Wizard emoji">
              🧙🏼‍♂️
            </span>
          </ListItem>
          <ListItem>
            <Link
              href="https://dev.to/waqasabbasi/server-side-rendered-app-with-next-js-react-and-redux-38gf"
              isExternal
              fontWeight="bold">
              Redux
            </Link>{' '}
            <span role="img" aria-label="Wizard emoji">
              🧙🏼‍♂️
            </span>
          </ListItem>
          <ListItem>
            <Link href="https://www.apollographql.com/docs/react/" isExternal fontWeight="bold">
              Apollo Client (GraphQL)
            </Link>{' '}
            <span role="img" aria-label="Wizard emoji">
              🧙🏼‍♂️
            </span>
          </ListItem>

          <ListItem>
            <Link href="https://www.typescriptlang.org/" isExternal fontWeight="bold">
              TypeScript (Optional)
            </Link>{' '}
            <span role="img" aria-label="Wizard emoji">
              🧙🏼‍♂️
            </span>
          </ListItem>
        </List>
      </Box>
    </MainLayout>
  );
}
