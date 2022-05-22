import { useEffect } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title + " | Studdyhub";
    return () => {
      document.title = prevTitle;
    };
  });
};
