import {InputsProps, Play} from "../types/types";
import { useState } from "react";
type InputsComponentProps = InputsProps & Play;
function Inputs({ setGridSize, play }: InputsComponentProps) {
    const [value, setValue] = useState(0);
    function handleSetSize() {
        setGridSize(value);
    }

    function handlePlay() {
        play();
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-2xl font-bold mb-4">Set grid size</h1>
            <div className="flex space-x-4">
                <input type="number" placeholder="Grid Size" className="border p-2 rounded"  value={value} onChange={(e) => setValue(Number(e.target.value))} />
                <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSetSize}>Set</button>
                <button className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded" onClick={() => setValue(0)}>Reset</button>
                <button className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded" onClick={() => handlePlay()}>play</button>
            </div>
        </div>
    )

}

export default Inputs;