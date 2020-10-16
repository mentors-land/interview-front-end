import React from 'react';
import { Divider, Grid, Text, Link } from '@chakra-ui/core';

const Footer = () => (
  <Grid
    as="footer"
    justifyContent="center"
    alignItems="center"
    gridTemplateRows="auto auto"
    p="50px 0px">
    <Divider marginBottom="1.5rem" />
    <Text>
      Made with{' '}
      <span role="img" aria-label="Coffee emoji">
        ☕️
      </span>{' '}
      by the{' '}
      <Link href="https://mentors.land" isExternal fontWeight="bold">
        Mentors Land Team
      </Link>
    </Text>
  </Grid>
);

export default Footer;
