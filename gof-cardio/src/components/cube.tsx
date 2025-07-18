import { GridSize } from "@/types/types";
function Cube(props: { gridSize: GridSize, setIsAlive: (index: number) => void }) {

    function handleCellClick(index: number) {
        props.setIsAlive(Number(index));
    }



    let gridItems = props.gridSize.map((isAlive,i) => (
        <span key={i} className={`w-[78px] h-[78px] border border-gray-300 flex items-center justify-center cursor-pointer ${isAlive ? 'bg-green-500' : 'bg-red-500'}`} onClick={() => handleCellClick(i)}> {i}</span> 
    ));

    return (
        <>
            {gridItems}
        </>
    )
}

export default Cube;