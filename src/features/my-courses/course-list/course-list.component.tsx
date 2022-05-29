import {
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { CourseListItem } from "./course-list-item";
import { CourseListProvider } from "./course-list.context";

const tabs = [
  {
    label: "Todos",
    published: undefined,
  },
  {
    label: "Publicados",
    published: true,
  },
  {
    label: "Não Publicados",
    published: false,
  },
];

export const CourseList = (): JSX.Element => {
  return (
    <Flex
      w="100%"
      maxW={{ base: "container.md", "2xl": "container.lg" }}
      bgColor={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.800", "gray.200")}
      direction="column"
      my="4"
      px="10"
      py="8"
      borderRadius="lg"
      boxShadow="md"
    >
      <Heading size="md">Meus Cursos</Heading>

      <Tabs
        variant="solid-rounded"
        colorScheme="blue"
        defaultIndex={0}
        isLazy
        lazyBehavior="unmount"
        mt="5"
        flexGrow="1"
      >
        <TabList>
          {tabs.map(({ label }) => (
            <Tab key={`course-list-tab-${label}`}>{label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map(({ label, published }) => (
            <TabPanel key={`course-list-tab-panel-${label}`}>
              <CourseListProvider published={published}>
                <CourseListItem />
              </CourseListProvider>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
