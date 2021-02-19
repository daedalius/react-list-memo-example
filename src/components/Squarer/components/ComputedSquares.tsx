import * as React from 'react';

import { IComputedSquare } from '../interfaces';

import { ComputedSquare } from './components/ComputedSquare';

interface ComputedSquaresProps {
  computedSquares: IComputedSquare[];
  onRemove: (number: number) => void;
}

export const ComputedSquares = React.memo(
  ({ computedSquares: squares, onRemove }: ComputedSquaresProps) => {
    console.log('<ComputedSquares /> rerendered');

    return (
      <ul>
        {squares.map((square) => (
          <ComputedSquare key={square.number} computedSquare={square} onRemove={onRemove} />
        ))}
      </ul>
    );
  }
);
