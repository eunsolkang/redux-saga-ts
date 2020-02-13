import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy, increase_async, decrease_async } from '../modules/counter';
import { useCallback } from 'react';

export default function useCounter() {
    const {count} = useSelector((state : RootState) => ({count : state.counter.count}));
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => 
        dispatch(increase_async()), [dispatch]
    );
    const onDecrease = useCallback(() => 
        dispatch(decrease_async()), [dispatch]
    );
    const onIncreaseBy = useCallback((diff : number) => 
        dispatch(increaseBy(diff)), [dispatch]
    );

    return {
        count,
        onIncrease,
        onDecrease,
        onIncreaseBy
    }
}
