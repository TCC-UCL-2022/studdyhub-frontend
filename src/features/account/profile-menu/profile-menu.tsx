import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Roles } from "@enums";
import { useAuthenticationContext } from "@features/authentication";
import { RiLogoutBoxLine, RiPlayList2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const options = [
  {
    label: "Meus cursos",
    link: "/my-courses",
    role: Roles.TEACHER,
    icon: <RiPlayList2Fill />,
  },
  {
    label: "Minhas matriculas",
    link: "/enrollments",
    role: Roles.STUDENT,
    icon: <RiPlayList2Fill />,
  },
];

export const ProfileMenu = (): JSX.Element => {
  const { user, signOut } = useAuthenticationContext();
  const avatarSize = useBreakpointValue({ base: "sm", md: "md" });
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  if (!user) {
    return (
      <Button as={Link} variant="solid" to="/login">
        Fazer login
      </Button>
    );
  }

  return (
    <Menu placement="bottom-end" id="app-layout-profile">
      <MenuButton
        as={Button}
        fontWeight="normal"
        variant="ghost"
        height="max-content"
        paddingY="1"
        paddingX="2"
      >
        <Flex align="center">
          {!isMobile && (
            <Box mr="4" textAlign="right">
              <Text>{user.name}</Text>
              <Text fontSize="small" color="gray.500">
                {user.email}
              </Text>
            </Box>
          )}

          <HStack>
            <Avatar size={avatarSize} name={user.name} />
          </HStack>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuGroup title="Opções">
          {options.map(({ label, link, icon }) => (
            <MenuItem
              key={`app-layout-profile-option-${link}`}
              as={Link}
              to={link}
              icon={icon}
            >
              {label}
            </MenuItem>
          ))}
          <MenuItem icon={<RiLogoutBoxLine />} onClick={signOut}>
            Sair
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
