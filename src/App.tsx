import React from 'react';
import {
  Flex,
} from '@chakra-ui/react'
import Thesis from './components/Thesis';
import Header from './components/Header';
import Resources from './components/Resources';
import Obligations from './components/Obligations';

function App() {
  return (
    <Flex direction='column' justifyContent='flex-start' alignItems='center' m={20} gap={5}>
      <Header />
      <Thesis />
      <Resources />
      <Obligations />
    </Flex>
  );
}

export default App;
