import { SearchContainer } from "@/features/search-courses";
import { AppLayout } from "@/features/ui/layout";

export const SearchPage = (): JSX.Element => {
  return (
    <AppLayout title="Cursos">
      <SearchContainer />
    </AppLayout>
  );
};
