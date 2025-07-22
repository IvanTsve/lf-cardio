type GridSize = boolean[][];
type InputsProps = {
  setGridSize: (size: number) => void;
};

type Play = {
    play: () => void;
}
export type { GridSize, InputsProps, Play };