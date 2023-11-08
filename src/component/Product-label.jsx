import { useState } from "react";

function Product({ addTodo }) {
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputData);

    setInputData("");
  };

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          onChange={handleChange}
          value={inputData}
        />

        <button>Add Item</button>
      </form>
    </>
  );
}

export default Product;
