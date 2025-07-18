import Cube from "@/components/cube";
import Inputs from "@/components/inputs";
import { useState } from "react";
import { GridSize } from "../types/types";
function Grid() {
    const [size, setSize] = useState([] as GridSize);
    function setGridSize(data: number) {
        if(data) {
            setSize([...Array(data)].map(() => false) as GridSize);
        }
    }

    function setIsAlive(index: number) {
        setSize(prev => {
            const updated = [...prev];  
            updated[index] = !updated[index];
            return [...updated];
        });
    }

    return (
        <>
            <Inputs setGridSize={setGridSize} />
            <div className="grid grid-cols-6 gap-4">
            <Cube gridSize={size} setIsAlive={setIsAlive} />
            </div>
        </>
    )

}


export default Grid;