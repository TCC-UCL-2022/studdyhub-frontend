import { images } from "@/assets";
import { Wrap } from "@chakra-ui/react";
import { DashboardItem } from "./dashboard-item";

export const DashboardGuest = (): JSX.Element => {
  return (
    <Wrap align="center" w="100%" p="1">
      <DashboardItem image={images.login} to="/login" title="Fazer login" />
      <DashboardItem
        image={images.search}
        to="/courses?search="
        title="Pesquisar Cursos"
      />
    </Wrap>
  );
};
