import { ReactNode, createContext, useState } from "react";
import { ModalDetailsType } from "../types/ModalDetails";

import projectsData from "../data/projects.json";

interface ModalContextProps {
  modalDetails: ModalDetailsType | null;
  handleModalVisible: (id?: string) => void;
  visible: boolean;
}

export const ModalContext = createContext({} as ModalContextProps);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalDetails, setModalDetails] = useState<ModalDetailsType | null>(
    null
  );
  const [visible, setVisible] = useState(false);

  function handleModalVisible(id?: string) {
    if (id) {
      const projectClicked = projectsData.projects.filter((project) => {
        return project.id === id;
      });

      setModalDetails(projectClicked[0]);

      setVisible(true);
    } else setVisible(false);
  }

  return (
    <ModalContext.Provider
      value={{ modalDetails, visible, handleModalVisible }}
    >
      {children}
    </ModalContext.Provider>
  );
}
