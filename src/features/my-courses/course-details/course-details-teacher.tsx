import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ReactNode } from "react";

type CourseDetailsTeacherProps = {
  infoComponent: ReactNode;
  activitiesComponent: ReactNode;
};

export const CourseDetailsTeacher = ({
  activitiesComponent,
  infoComponent,
}: CourseDetailsTeacherProps): JSX.Element => {
  return (
    <Tabs mt="4" variant="solid-rounded" defaultIndex={0} isLazy>
      <TabList justifyContent="center">
        <Tab>Informações</Tab>
        <Tab>Atividades</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>{infoComponent}</TabPanel>
        <TabPanel>{activitiesComponent}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
