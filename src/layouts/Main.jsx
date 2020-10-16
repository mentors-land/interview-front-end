import React from 'react';
import { Grid } from '@chakra-ui/core';
import PropTypes from 'prop-types';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Main = ({ children }) => (
  <Grid
    w="100%"
    h="100vh"
    px={10}
    maxWidth="1400px"
    gridTemplateColumns="100%"
    justifyItems="center"
    gridGap={10}
    m="0 auto">
    <Navbar />
    {children}
    <Footer />
  </Grid>
);

Main.prototype = {
  children: PropTypes.element.isRequired
};

export default Main;
