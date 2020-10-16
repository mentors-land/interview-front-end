import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.any
};

export default App;
