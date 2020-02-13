import { useDispatch,useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../modules';
import { getPost, getUsers } from '../modules/sample';


export default function useSampleActions(id? : number) {
    const users = useSelector((state : RootState) => state.sample.users);
    const post = useSelector((state : RootState) => state.sample.post);
    const dispatch = useDispatch();

    const getpost = useCallback(
        () => 
            dispatch(getPost(id))
        ,
        [dispatch, id]
    );
    const getusers = useCallback(
        () => 
            dispatch(getUsers())
        ,
        [dispatch]
    );

    return {
        post,
        users,
        getpost,
        getusers
    }
}