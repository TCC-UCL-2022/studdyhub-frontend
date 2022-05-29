import { RadioButton, RadioButtonGroup } from "@/features/ui/forms";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { CourseListContainer } from "./course-list-container";
import { CourseListProvider, PublishStatus } from "./course-list.context";

const options = [
  {
    label: "Todos",
    value: PublishStatus.All,
  },
  {
    label: "Publicados",
    value: PublishStatus.Published,
  },
  {
    label: "Não Publicados",
    value: PublishStatus.Unpublished,
  },
];

export const CourseList = (): JSX.Element => {
  const [published, setPublished] = useState(PublishStatus.All);

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

      <RadioButtonGroup
        mt="4"
        value={published}
        onChange={setPublished as any}
        isAttached={false}
      >
        {options.map(({ label, value }) => (
          <RadioButton borderRadius="full" value={value}>
            {label}
          </RadioButton>
        ))}
      </RadioButtonGroup>

      <CourseListProvider published={published}>
        <CourseListContainer mt="4" flexGrow="1" />
      </CourseListProvider>
    </Flex>
  );
};
