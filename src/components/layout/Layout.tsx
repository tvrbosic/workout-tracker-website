import { Outlet } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <Flex flexDirection='column'>
      <Header />
      <Box p={4}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
