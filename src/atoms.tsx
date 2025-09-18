import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export enum Categories {
  "TO_DO" = "To Do",
  "DOING" = "Doing",
  "DONE" = "Done",
}

export const customCategoriesAtom = atomWithStorage<string[]>(
  "customCategories",
  []
);

export const allCategories = atom((get) => {
  return [...Object.values(Categories), ...get(customCategoriesAtom)];
});

export interface IToDo {
  text: string;
  id: number;
  category: Categories | string;
};

export const categoryState = atom<Categories | string>(Categories.TO_DO);

export const toDoState = atom<IToDo[]>([]);

export const toDoSelector = atom((get) => {
  const toDos = get(toDoState);
  const category = get(categoryState);
  return toDos.filter((toDo) => toDo.category === category);
});