import { ActivityList, ActivityListProvider } from "@/features/my-activities";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { CourseInfo } from "./course-info";

type CourseDetailsProps = {
  courseId: string;
};

export const CourseDetails = ({
  courseId,
}: CourseDetailsProps): JSX.Element => {
  return (
    <Tabs mt="4" variant="solid-rounded" defaultIndex={0} isLazy>
      <TabList>
        <Tab>Informações</Tab>
        <Tab>Atividades</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <CourseInfo courseId={courseId} />
        </TabPanel>
        <TabPanel>
          <ActivityListProvider courseId={courseId}>
            <ActivityList />
          </ActivityListProvider>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
