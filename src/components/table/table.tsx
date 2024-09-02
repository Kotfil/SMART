import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {useEffect} from "react";
import {getUsers} from "../../store/slices/users/users.slice";
import {Dispatch} from "../../store/interfaces/dispatch.interface";

export const Table = () => {
    const {users} = useAppSelector(state => state.users)
    const dispatch: Dispatch = useAppDispatch()
    useEffect(() => {
        try {
            dispatch(getUsers())
        } catch (e) {
            console.log(e)
        }
    }, [dispatch])
    console.log(users,'FFFF')
    return (
        <>

        </>
    );
};

