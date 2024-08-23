"use client";
import React, { useState } from "react";
import Image from "next/image";

const Satesto = ({ data }) => {
  const [important, setImportant] = useState(data.ordered);
  const toggleImportant = async () => {
    const response = await fetch(`/api/todos/${data.id}/toggletodo`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ important: !important }),
    });
    if (response.ok) {
      setImportant(!important);
    }
  };
  return (
    <div>
      <div className="todo-item">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div onClick={toggleImportant} style={{ cursor: "pointer" }}>
          <Image
            src={important ? "/star-filled.svg" : "/star-outline.svg"}
            alt="Star Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Satesto;
