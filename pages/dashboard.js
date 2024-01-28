import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/UI/Navbar';

const Dashboard = () => {
  return (
    <Flex>
      <Sidebar />
      <Flex direction="column" ml="250px" p={4} w="100%">
        <Navbar />
        {/* Rest of your content goes here */}
      </Flex>
    </Flex>
  );
};

export default Dashboard;
