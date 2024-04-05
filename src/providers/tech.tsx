import { ReactNode, createContext, useState } from "react";
import { TechType } from "../types/TechsDetails";

import techsData from "../data/techs.json";

interface TechContextProps {
  techDetails: TechType | null;
  handleHover: () => void;
  hover: boolean;
  handleTechDetails: (id: string) => void;
}

export const TechContext = createContext({} as TechContextProps);

export function TechProvider({ children }: { children: ReactNode }) {
  const [techDetails, setTechDetails] = useState<TechType | null>(null);
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover(false);
  }

  function handleTechDetails(id: string) {
    setHover(true);
    const techClicked = techsData.technologies.filter((tech) => {
      return tech.id === id;
    });

    setTechDetails(techClicked[0]);
  }

  return (
    <TechContext.Provider
      value={{ techDetails, handleHover, handleTechDetails, hover }}
    >
      {children}
    </TechContext.Provider>
  );
}
