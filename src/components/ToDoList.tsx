import { useAtom, useAtomValue } from "jotai";
import CreateToDo from "./CreateToDo";
import { allCategories, Categories, categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import React from "react";
import CategoryManager from "./CategoryManager";

function ToDoList() {
  const toDos = useAtomValue(toDoSelector);
  const [category, setCategory] = useAtom(categoryState);
  const categories = useAtomValue(allCategories);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        {categories.map((c) => (
          <option value={c}>
            {c}
          </option>
        ))}
      </select>
      <CategoryManager />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo}/>
      ))}
    </div>
  );
}

export default ToDoList;