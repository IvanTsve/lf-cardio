import { GridSize } from "@/types/types";
function Cube(props: { gridSize: GridSize, setIsAlive: (index: number, cellIndex: number) => void }) {

    function handleCellClick(row: number, cellIndex: number) {
        props.setIsAlive(Number(row), Number(cellIndex));
    }



    let gridItems = props.gridSize.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
            <span
                key={cellIndex}
                className={`w-[78px] h-[78px] border border-gray-300 flex items-center justify-center cursor-pointer transition ${cell ? 'bg-green-500' : 'bg-red-500'}`}
                onClick={() => handleCellClick(rowIndex,cellIndex)}
            >
                {rowIndex} : {cellIndex}
            </span>
        ))
    );

    return (
        <>
            {gridItems}
        </>
    )
}

export default Cube;