import { atom } from "jotai";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
};

export const categoryState = atom<Categories>(Categories.TO_DO);

export const toDoState = atom<IToDo[]>([]);

export const toDoSelector = atom((get) => {
  const toDos = get(toDoState);
  const category = get(categoryState);
  return toDos.filter((toDo) => toDo.category === category);
});