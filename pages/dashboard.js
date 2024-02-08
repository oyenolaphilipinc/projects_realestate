import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import SideBarFunc from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBarFunc />
      <div className="flex-1">
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
