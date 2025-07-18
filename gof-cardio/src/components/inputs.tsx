import {InputsProps} from "../types/types";
import { useState } from "react";

function Inputs({setGridSize} : InputsProps) {
    const [value, setValue] = useState(0);
    function handleSetSize() {
        setGridSize(value);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-2xl font-bold mb-4">Set grid size</h1>
            <div className="flex space-x-4">
                <input type="number" placeholder="Grid Size" className="border p-2 rounded"  value={value} onChange={(e) => setValue(Number(e.target.value))} />
                <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSetSize}>Set</button>
                <button className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded" onClick={() => setValue(0)}>Reset</button>
            </div>
        </div>
    )

}

export default Inputs;