import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid } from '@chakra-ui/react';
import { FaDollarSign, FaShoppingCart, FaChartLine } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Business Dashboard</Heading>
      <SimpleGrid columns={3} spacing={10}>
        <Stat p={5} boxShadow='base'>
          <Flex alignItems="center">
            <Box as={FaShoppingCart} size="24px" mr={2} />
            <StatLabel>Sales</StatLabel>
          </Flex>
          <StatNumber>1,500</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat p={5} boxShadow='base'>
          <Flex alignItems="center">
            <Box as={FaDollarSign} size="24px" mr={2} />
            <StatLabel>Revenue</StatLabel>
          </Flex>
          <StatNumber>$250,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5.4%
          </StatHelpText>
        </Stat>
        <Stat p={5} boxShadow='base'>
          <Flex alignItems="center">
            <Box as={FaChartLine} size="24px" mr={2} />
            <StatLabel>Growth</StatLabel>
          </Flex>
          <StatNumber>8%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            8% since last month
          </StatHelpText>
        </Stat>
      </SimpleGrid>
      <Text mt={10} fontSize="xl">
        Interactive charts and graphs will be implemented here.
      </Text>
    </Box>
  );
};

export default Index;