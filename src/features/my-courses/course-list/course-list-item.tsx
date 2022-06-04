import { CourseService, ICourse } from "@/services/courses";
import {
  Flex,
  HStack,
  Icon,
  IconButton,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMemo } from "react";
import {
  RiCheckboxCircleFill,
  RiDeleteBin2Fill,
  RiEditBoxFill,
  RiEyeFill,
  RiEyeOffFill,
  RiVideoUploadFill,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useCourseListContext } from "./course-list.context";

type CourseListItemProps = {
  course: ICourse;
};

enum ItemAction {
  DELETE = "delete",
  PUBLISH = "publish",
  UNPUBLISH = "unpublish",
  EDIT = "edit",
  VIEW = "view",
}

const getOptions = (published?: boolean) => [
  {
    icon: RiEyeFill,
    label: "Visualizar curso",
    colorScheme: "blue",
    action: ItemAction.VIEW,
    show: true,
  },
  {
    icon: RiVideoUploadFill,
    label: "Publicar curso",
    colorScheme: "orange",
    action: ItemAction.PUBLISH,
    show: !published,
  },
  {
    icon: RiEyeOffFill,
    label: "Despublicar curso",
    colorScheme: "orange",
    action: ItemAction.UNPUBLISH,
    show: published,
  },
  {
    icon: RiEditBoxFill,
    label: "Editar curso",
    colorScheme: "green",
    action: ItemAction.EDIT,
    show: true,
  },
  {
    icon: RiDeleteBin2Fill,
    label: "Excluir curso",
    colorScheme: "red",
    action: ItemAction.DELETE,
    show: true,
  },
];

export const CourseListItem = ({
  course,
}: CourseListItemProps): JSX.Element => {
  const navigate = useNavigate();
  const { fetchCourses, editCourse } = useCourseListContext();
  const iconColor = useColorModeValue("white", "black");

  const mapAction = useMemo(
    () => ({
      [ItemAction.DELETE]: async () => {
        await CourseService.deleteCourse(course.id);
        await fetchCourses();
      },
      [ItemAction.EDIT]: () => {
        editCourse(course);
      },
      [ItemAction.PUBLISH]: async () => {
        const updated = await CourseService.updateCoursePublishStatus(
          course.id,
          true
        );
        if (updated) await fetchCourses();
      },
      [ItemAction.UNPUBLISH]: async () => {
        const updated = await CourseService.updateCoursePublishStatus(
          course.id,
          false
        );
        if (updated) await fetchCourses();
      },
      [ItemAction.VIEW]: () => navigate(`/my-courses/${course.id}`),
    }),
    [course, editCourse, fetchCourses, navigate]
  );

  return (
    <ListItem
      bgColor={useColorModeValue("gray.200", "gray.900")}
      borderRadius="md"
      py="2"
      px="5"
      _hover={{
        transition: "all 0.2s",
        bg: useColorModeValue("gray.300", "gray.700"),
        boxShadow: "md",
      }}
    >
      <Flex direction="row" w="100%">
        <Flex
          direction="row"
          w="100%"
          textOverflow="ellipsis"
          alignItems="center"
        >
          <ListIcon
            as={RiCheckboxCircleFill}
            color={useColorModeValue("blue.500", "blue.300")}
          />

          <Text>{course.title}</Text>
        </Flex>

        <HStack>
          {getOptions(course.published).map(
            ({ colorScheme, icon, label, action, show }) =>
              show && (
                <Tooltip label={label} key={`activity-item-options-${label}`}>
                  <IconButton
                    aria-label={label}
                    icon={<Icon color={iconColor} as={icon} />}
                    size="sm"
                    colorScheme={colorScheme}
                    onClick={mapAction[action]}
                  />
                </Tooltip>
              )
          )}
        </HStack>
      </Flex>
    </ListItem>
  );
};
