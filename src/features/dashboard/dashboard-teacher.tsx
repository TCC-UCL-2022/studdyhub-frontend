import { images } from "@/assets";
import { Wrap } from "@chakra-ui/react";
import { DashboardItem } from "./dashboard-item";

export const DashboardTeacher = (): JSX.Element => {
  return (
    <Wrap align="center" w="100%" p="1">
      <DashboardItem
        image={images.itemsList}
        to="/my-courses"
        title="Meus Cursos"
      />

      <DashboardItem
        image={images.addVideo}
        to="/my-courses/create"
        title="Adcionar Curso"
      />
    </Wrap>
  );
};
