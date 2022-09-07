import React, { useState } from "react";

const Input = ({ onUpdate }: { onUpdate: (v: string) => void }) => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onUpdate(value);
      }}
    >
      <input
        type="text"
        name="name"
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default Input;
