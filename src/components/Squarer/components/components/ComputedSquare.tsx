import * as React from 'react';

import { IComputedSquare } from '../../interfaces';

interface ComputedSquareProps {
  computedSquare: IComputedSquare;
  onRemove: (number: number) => void;
}

export const ComputedSquare = React.memo(({ computedSquare, onRemove }: ComputedSquareProps) => {
  console.log(`<ComputedSquare /> of ${computedSquare.number} rerendered`);

  return (
    <li>
      <p>
        {computedSquare.square} is a square of {computedSquare.number}
      </p>
      <button onClick={() => onRemove(computedSquare.number)}>remove</button>
    </li>
  );
});
