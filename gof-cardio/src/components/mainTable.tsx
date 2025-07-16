import Cube from "@/components/cube";
import Grid from "@/components/grid";
import { useState } from 'react';

function MainTable() {
    const [ cubes, setCubes ] = useState<number[]>([]);
    const gridSize = 36;
    const isAlive = 0;

    return (
        <div className="w-full h-full flex items-center justify-center">
           <Grid gridSize={gridSize} />
        </div>
    );
}

export default MainTable;