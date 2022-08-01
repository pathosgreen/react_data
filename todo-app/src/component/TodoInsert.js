import React from "react";
import { MdAdd } from 'react-icons/md';


const TodoInsert = () => {
    return (
        <from classname="TodoInsert">
            <input placeholder="할 일을 입력하세요." />
            <button type="submit">
                <MdAdd />
            </button>
        </from>
    );
};

export default TodoInsert;