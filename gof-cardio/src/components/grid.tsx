function Grid(props : { gridSize: number }) {
    let gridItems = [...Array(props.gridSize)].map((_,i) => (
  <div key={i} className="w-[50px] h-[50px] border border-gray-300 flex items-center justify-center">
  </div>
));
    return (
        <div className="grid grid-cols-6 gap-4">
            {gridItems}
        </div>
    )

}


export default Grid;