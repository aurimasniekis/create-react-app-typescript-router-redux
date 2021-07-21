import * as React from 'react';
import { increment } from '../../redux/slices/Counter';
import { useDispatch, useSelector } from '../../redux';

const MainPage = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>
        Count:
        {value}
      </h1>

      <button type="button" onClick={handleIncrement}>Increase</button>
    </div>
  );
};

export default MainPage;
