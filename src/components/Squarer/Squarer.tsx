import * as React from 'react';

import { IComputedSquare } from './interfaces';
import { ComputedSquares } from './components/ComputedSquares';

export const Squarer = () => {
  console.log('<Squarer /> rerendered');

  const [enteredNumber, updateEnteredNumber] = React.useState(0);
  const [computedSquares, updateComputedSquares] = React.useState<IComputedSquare[]>([]);

  const addComputedSquare = React.useCallback(() => {
    updateComputedSquares((computedSquares) => {
      if (computedSquares.find((i) => i.number === enteredNumber)) {
        return computedSquares;
      }

      return [
        ...computedSquares,
        {
          number: enteredNumber,
          square: Math.sqrt(enteredNumber),
        },
      ];
    });
  }, [enteredNumber]);

  const removeComputedSquare = React.useCallback((number) => {
    updateComputedSquares((computedSquares) => computedSquares.filter((i) => i.number !== number));
  }, []);

  return (
    <div>
      <div>
        <input type="number" onChange={(event) => updateEnteredNumber(+event.target.value)} />
        <button onClick={addComputedSquare}>calculate</button>
      </div>
      <div>
        <ComputedSquares computedSquares={computedSquares} onRemove={removeComputedSquare} />
      </div>
    </div>
  );
};
