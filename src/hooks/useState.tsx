import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useState (type, name) {
    const state = useSelector((state : RootState) => state[type][name]);
    return state;
}
