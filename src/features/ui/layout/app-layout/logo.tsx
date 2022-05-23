import { logos } from "@assets";
import { Image, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = (): JSX.Element => {
  return (
    <Link to="/">
      <Image
        w="40"
        transition="all ease 0.2s"
        src={useColorModeValue(logos.dark, logos.light)}
      />
    </Link>
  );
};
