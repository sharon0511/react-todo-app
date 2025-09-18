import { useState } from "react";
import { useAtom } from "jotai";
import { customCategoriesAtom } from "../atoms";

function CategoryManager() {
  const [customCategories, setCustomCategories] = useAtom(customCategoriesAtom);
  const [input, setInput] = useState("");

  const addCategory = () => {
    if (!input.trim() || customCategories.includes(input)) return;
    setCustomCategories([...customCategories, input.trim()]);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 카테고리 입력"
      />
      <button onClick={addCategory}>추가</button>
    </div>
  );
}

export default CategoryManager;