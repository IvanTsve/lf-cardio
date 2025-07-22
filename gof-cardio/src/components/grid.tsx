import Cube from "@/components/cube";
import Inputs from "@/components/inputs";
import { useState } from "react";
import { GridSize } from "../types/types";
function Grid() {
    const [size, setSize] = useState([] as GridSize);

    function setGridSize(data: number) {
        if(data) {
            const rows = Math.ceil(data / 5); 
            let grid = [];

            for (let i = 0; i < rows; i++) {
                grid.push(Array(6).fill(false)); 
            }
            setSize(grid as GridSize);
        }
    }

    function setIsAlive(index: number, cellIndex: number) {
        
        setSize(prev => {
            return prev.map((row, i) => i === index ? row.map((cell, j) => j === cellIndex ? !cell : cell) : row );
        });
    }
    let count = 0;

    function play() {
        const nextGrid = size.map((row, i) =>
            row.map((cell, j) => {
                const neighbors = checkSides(i, j);
                const aliveNeighbors = neighbors.filter(n => n).length;

                // Game of Life logic
                if (cell) {
                    if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                        return false; // Dies
                    }
                    return aliveNeighbors === 2 || aliveNeighbors === 3; // Survives
                } else {
                    return aliveNeighbors === 3; // Becomes alive
                }
            })
        );

        setSize(nextGrid);

        // Optionally re-run play after delay
        if (nextGrid.flat().includes(true)) {
            setTimeout(() => play(), 1000);
        }
}

    function checkIsAlive(row: number, cellIndex: number) {
        const arr = checkSides(row, cellIndex);
        let isAlive = arr.filter(el => el == true).length > 1 && arr.filter(el => el == true).length < 4; 
        if (isAlive) {
            setSize(prev => {
                prev = size.map((r, i) => i === row ? r.map((cell, j) => j === cellIndex ? true : cell) : r );
                return prev;
            });
            
        } else {
            setSize(prev => {
                prev = size.map((r, i) => i === row ? r.map((cell, j) => j === cellIndex ? cell : false) : r );
                return prev;
            });
        }
    }

    function checkSides(row: number, cellIndex: number) : Array<boolean> { 
        let alive = [];
        const leftSide = size[row][cellIndex - 1];
        const rightSide = size[row][cellIndex + 1];
        const topSide = size[row-1] ? size[row-1][cellIndex] : false;
        const bottomSide = size[row+1] ? size[row+1][cellIndex] : false;
        const topLeft = size[row-1] ? size[row-1][cellIndex - 1] : false;
        const topRight = size[row-1] ? size[row-1][cellIndex + 1] : false;
        const bottomLeft = size[row+1] ? size[row+1][cellIndex - 1] : false;
        const bottomRight = size[row+1] ? size[row+1][cellIndex + 1] : false;
        alive.push(leftSide, rightSide, topSide, bottomSide, topLeft, topRight, bottomLeft, bottomRight);
        return alive;
    }

    return (
        <>
            <Inputs setGridSize={setGridSize} play={play} />
            <div className="grid grid-cols-6 gap-4">
            <Cube gridSize={size} setIsAlive={setIsAlive} />
            </div>

        </>
    )

}


export default Grid;