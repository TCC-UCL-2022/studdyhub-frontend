import { HStack, useRadioGroup } from "@chakra-ui/react";
import { Roles } from "@enums";
import { RadioCard } from "@features/ui/forms";
import { useOnboardingContext } from "./onboarding.context";

const options = [
  {
    value: Roles.STUDENT,
    label: "Estudante",
  },
  {
    value: Roles.TEACHER,
    label: "Professor",
  },
];

export const OnboardingSelectRole = (): JSX.Element => {
  const { handleSelectRole, role } = useOnboardingContext();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "role",
    onChange: handleSelectRole,
    value: role,
  });

  const group = getRootProps();

  return (
    <HStack {...group} w="100%">
      {options.map(({ label, value }) => (
        <RadioCard key={value} {...getRadioProps({ value })} fullWidth>
          {label}
        </RadioCard>
      ))}
    </HStack>
  );
};
