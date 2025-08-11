import { useAtomValue, useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetAtom(toDoState);
  const category = useAtomValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({toDo}: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
          })} 
        placeholder="Write a To Do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;