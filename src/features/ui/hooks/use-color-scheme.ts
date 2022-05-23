import { theme } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export interface ColorScheme {
  base: string;
  accent: string;
}

export const useColorscheme = (color: string): ColorScheme => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>({
    base: theme.colors.blue[100],
    accent: theme.colors.blue[500],
  });

  useEffect(() => {
    setColorScheme({
      base: theme.colors[color as keyof typeof theme.colors][100],
      accent: theme.colors[color as keyof typeof theme.colors][500],
    });
  }, [color]);

  return colorScheme;
};
