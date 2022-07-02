import {
  Flex,
  FlexProps,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
  ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";

type SearchParams = {
  search: string;
};

type SearchBarProps = FlexProps & {
  onSearch?: (search: string) => void;
  variant?: ThemingProps<"Input">["variant"];
};

export const SearchBar = ({
  onSearch,
  variant = "filled",
  ...props
}: SearchBarProps): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const unstyled = variant === "unstyled";
  const bgColor = useColorModeValue("white", "whiteAlpha.50");
  const hoverBgColor = useColorModeValue("gray.50", "whiteAlpha.100");

  const { handleSubmit, register } = useForm<SearchParams>({
    defaultValues: {
      search: searchParams.get("search") || "",
    },
  });

  const onSubmit = useCallback(
    ({ search }: SearchParams) => {
      navigate(`/courses?search=${search}`);
      onSearch?.(search);
    },
    [navigate, onSearch]
  );

  return (
    <Flex
      as="form"
      w="100%"
      onSubmit={handleSubmit(onSubmit)}
      direction="row"
      {...props}
    >
      <InputGroup
        variant={variant}
        boxShadow={unstyled ? "" : "lg"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="lg"
        bgColor={unstyled ? "" : bgColor}
      >
        <InputLeftElement
          h="100%"
          left={unstyled ? "0" : "2"}
          pointerEvents="none"
          children={<Icon fontSize="2xl" color="blue.500" as={RiSearch2Line} />}
        />
        <Input
          {...register("search")}
          type="text"
          placeholder="Pesquisar curso"
          minH="14"
          fontSize="lg"
          borderRadius="lg"
          pl={unstyled ? "8" : "14"}
          pr={unstyled ? "20" : "28"}
          bgColor={unstyled ? "" : bgColor}
          _hover={{
            bgColor: unstyled ? "" : hoverBgColor,
          }}
        />
        <InputRightElement
          h="100%"
          as="button"
          type="submit"
          right={unstyled ? "0" : "10"}
          children={
            <span>
              <Kbd fontSize="xl">Enter</Kbd>
            </span>
          }
        />
      </InputGroup>
    </Flex>
  );
};
