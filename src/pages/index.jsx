import { Box, Text, Heading, List, ListItem, ListIcon, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

import MainLayout from 'layouts/Main';

export default function Home() {
  return (
    <MainLayout>
      <Heading as="h1" size="2xl" textAlign="center" maxWidth={700}>
        Hey! Welcome to your technical challenge!{' '}
        <span role="img" aria-label="Fest emoji">
          🎉
        </span>{' '}
        <span role="img" aria-label="Fest emoji">
          🥳
        </span>
      </Heading>
      <Box pt={10} w="100%" maxWidth={950}>
        <Heading as="h2" size="lg" mb={5}>
          What is the purpose of this test?
        </Heading>
        <Text mb={5}>
          We want to know your capacity for resolution and investigation. We will take into account
          the following points:
        </Text>
        <List styleType="disc" spacing={3}>
          <ListItem>
            Quality of the delivered code{' '}
            <span role="img" aria-label="Wizard emoji">
              🧙🏼‍♂️
            </span>
          </ListItem>
          <ListItem>
            Any addition that you find interesting{' '}
            <span role="img" aria-label="Eyes emoji">
              👀
            </span>
          </ListItem>
          <ListItem>
            Proactivity and use of both NextJS and ChakraUI APIs{' '}
            <span role="img" aria-label="Dolphin emoji">
              🐬
            </span>
          </ListItem>
          <ListItem>
            If you dare to use TypeScript it would be a great plus!{' '}
            <span role="img" aria-label="Dolphin emoji">
              🙌🏼
            </span>
          </ListItem>
          <ListItem>
            Your knowledge and cleanliness with GIT (Consider using{' '}
            <Link
              href="https://seesparkbox.com/foundry/semantic_commit_messages"
              isExternal
              fontWeight="bold">
              semantic commits
            </Link>
            ){' '}
            <span role="img" aria-label="Eyes emoji">
              😎
            </span>
          </ListItem>
          <ListItem>
            Check our{' '}
            <strong>
              <Link as={NextLink} href="/stack" fontWeight="bold">
                technology stack
              </Link>
            </strong>
            for more information
            <span role="img" aria-label="Eyes emoji">
              😎
            </span>
          </ListItem>
        </List>
      </Box>
      <Box pt={10} w="100%" maxWidth={950}>
        <Heading as="h2" size="lg" mb={5}>
          What do we expect you to do?
        </Heading>
        <Text mb={5}>You should work with this project, we leave you the instructions below:</Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            Copy{' '}
            <Link
              href="https://github.com/mentors-land/interview-front-end"
              isExternal
              fontWeight="bold">
              this repository
            </Link>{' '}
            to your GitHub account privately, work on your copy and when you are ready send us a
            pull request to our repo{' '}
            <span role="img" aria-label="Dinosaur emoji">
              🦖
            </span>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            Create a Login page with username and password and by clicking on the button saves the
            results in Redux. You sholud use{' '}
            <Link href="https://react-hook-form.com/" isExternal fontWeight="bold">
              React Hook Form
            </Link>{' '}
            and{' '}
            <Link href="https://github.com/jquense/yup" isExternal fontWeight="bold">
              Yup
            </Link>{' '}
            <span role="img" aria-label="Rocket emoji">
              🚀
            </span>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            Add the username that the user entered in the login screen to the left side of the{' '}
            <strong>Login</strong> button, consuming this information from Redux{' '}
            <span role="img" aria-label="Man emoji">
              🤓
            </span>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            You should use this test{' '}
            <Link href="https://graphqlzero.almansi.me/" isExternal fontWeight="bold">
              GraphQL server
            </Link>{' '}
            to make a small{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"
              isExternal
              fontWeight="bold">
              CRUD
            </Link>{' '}
            application{' '}
            <span role="img" aria-label="Man emoji">
              😏
            </span>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="green.500" />
            Feel free to design the app as you like, just remember to use{' '}
            <Link href="https://chakra-ui.com/" isExternal fontWeight="bold">
              Chakra UI
            </Link>{' '}
            and if in the name of the post you can send the username that you saved in redux, it
            would be a great plus!{' '}
            <span role="img" aria-label="Cash emoji">
              💸
            </span>
          </ListItem>
        </List>
      </Box>
    </MainLayout>
  );
}
