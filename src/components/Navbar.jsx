import React from 'react';
import Link from 'next/link';
import { Box, Grid, Button, Text } from '@chakra-ui/core';

const Navbar = () => (
  <Box as="header" w="100%">
    <Grid
      as="nav"
      gridTemplateColumns="auto auto"
      justifyContent="space-between"
      alignItems="center"
      p="25px 0px"
      w="100%">
      <Link href="/">
        <Text fontSize="2xl" fontWeight="bold">
          Front-End Interview{' '}
          <span role="img" aria-label="Rainbow emoji">
            🌈
          </span>
        </Text>
      </Link>
      <Link href="/login">
        <Button variant="ghost" variantColor="green">
          Login
        </Button>
      </Link>
    </Grid>
  </Box>
);

export default Navbar;
