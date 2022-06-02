import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
  ThemingProps,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";

type SearchParams = {
  search: string;
};

type SearchBarProps = {
  onSearch?: (search: string) => void;
  variant?: ThemingProps<"Input">["variant"];
};

export const SearchBar = ({
  onSearch,
  variant = "filled",
}: SearchBarProps): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const unstyled = variant === "unstyled";

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
    <Flex as="form" w="100%" onSubmit={handleSubmit(onSubmit)} direction="row">
      <InputGroup
        variant={variant}
        boxShadow={unstyled ? "" : "lg"}
        display="flex"
        alignItems="center"
        justifyContent="center"
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
          minH="16"
          fontSize="lg"
          pl={unstyled ? "8" : "14"}
          pr={unstyled ? "20" : "28"}
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
