import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  ThemingProps,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

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
  const { search } = useParams<{ search: string }>();

  const { handleSubmit, register } = useForm<SearchParams>({
    defaultValues: {
      search,
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
      <InputGroup variant={variant}>
        <InputLeftElement
          top="0"
          bottom="0"
          pointerEvents="none"
          children={<Icon fontSize="2xl" color="blue.500" as={RiSearch2Line} />}
        />
        <Input
          {...register("search")}
          type="text"
          placeholder="Pesquisar curso"
          minH="14"
          fontSize="lg"
          pl={variant === "unstyled" ? "8" : ""}
        />
      </InputGroup>
    </Flex>
  );
};
