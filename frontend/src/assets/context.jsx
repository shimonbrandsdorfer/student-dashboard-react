import { createContext, useContext } from 'react';

export const ProjectContext = createContext();



export function useProjectInfo() {
  return useContext(ProjectContext);
}