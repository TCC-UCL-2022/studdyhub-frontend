import { RadioButton, RadioButtonGroup } from "@/features/ui/forms";
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
    <>
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
    </>
  );
};
