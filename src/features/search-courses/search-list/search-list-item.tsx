import { ICourse } from "@/services/courses";

type SearchListItemProps = {
  course: ICourse;
};

export const SearchListItem = ({
  course,
}: SearchListItemProps): JSX.Element => {
  return (
    <div>
      <h1>SearchListItem</h1>
    </div>
  );
};
