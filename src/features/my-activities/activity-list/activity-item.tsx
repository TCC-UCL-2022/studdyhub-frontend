import { Roles } from "@/enums";
import { useAuthenticationContext } from "@/features/authentication";
import { IActivity } from "@/services/activities";
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
  useDisclosure,
} from "@chakra-ui/react";
import { useMemo } from "react";
import {
  RiCheckboxCircleFill,
  RiDeleteBin2Fill,
  RiFileTextFill,
} from "react-icons/ri";
import { ActivityDetailsModal } from "../activity-details";

type ActivityItemProps = {
  activity: IActivity;
};

enum ItemAction {
  DELETE = "delete",
  DETAILS = "details",
}

const getOptions = (canDelete: boolean) => [
  {
    icon: RiFileTextFill,
    label: "Detalhes da atividade",
    colorScheme: "blue",
    action: ItemAction.DETAILS,
    show: true,
  },
  {
    icon: RiDeleteBin2Fill,
    label: "Excluir atividade",
    colorScheme: "red",
    action: ItemAction.DELETE,
    show: canDelete,
  },
];

export const ActivityItem = ({ activity }: ActivityItemProps): JSX.Element => {
  const { onOpen, ...modalProps } = useDisclosure();
  const { user } = useAuthenticationContext();
  const iconColor = useColorModeValue("white", "black");
  const canDelete = user?.role === Roles.TEACHER;

  const mapAction = useMemo(
    () => ({
      [ItemAction.DETAILS]: () => onOpen(),
      [ItemAction.DELETE]: () => {},
    }),
    [onOpen]
  );

  return (
    <>
      <ListItem
        bgColor={useColorModeValue("gray.200", "gray.900")}
        borderRadius="md"
        py="2"
        px="5"
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

            <Text>{activity.title}</Text>
          </Flex>

          <HStack>
            {getOptions(canDelete).map(
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
      <ActivityDetailsModal activity={activity} modalProps={modalProps} />
    </>
  );
};
