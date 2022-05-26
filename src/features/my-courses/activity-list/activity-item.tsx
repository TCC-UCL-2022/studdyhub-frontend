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
} from "@chakra-ui/react";
import {
  RiCheckboxCircleFill,
  RiDeleteBin2Fill,
  RiFileTextFill,
} from "react-icons/ri";

type ActivityItemProps = {
  activity: IActivity;
};

const options = [
  {
    icon: RiFileTextFill,
    label: "Detalhes da atividade",
    colorScheme: "blue",
    onClick: () => {},
  },
  {
    icon: RiDeleteBin2Fill,
    label: "Excluir atividade",
    colorScheme: "red",
    onClick: () => {},
  },
];

export const ActivityItem = ({ activity }: ActivityItemProps): JSX.Element => {
  const iconColor = useColorModeValue("white", "black");

  return (
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
          {options.map(({ colorScheme, icon, label, onClick }) => (
            <Tooltip label={label} key={`activity-item-options-${label}`}>
              <IconButton
                aria-label={label}
                icon={<Icon color={iconColor} as={icon} />}
                size="sm"
                colorScheme={colorScheme}
              />
            </Tooltip>
          ))}
        </HStack>
      </Flex>
    </ListItem>
  );
};
