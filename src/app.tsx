import {useAppDispatch, useAppSelector} from "./store/hooks/hooks";
import {useEffect} from "react";

export const App = _ => {
    // const dispatch = useAppSelector(state => state.users)
    console.log(dispatch,'WWWWWWWWw')
    const dispatch = useAppDispatch()
    useEffect(() => {
        try {
            //@ts-ignore
            dispatch(getProducts())
        } catch (e) {
            console.log(error)
        }
    }, [dispatch])
    return (
        <> made by <a href="https://github.com/Kotfil" target={'_blank'}><h1>Kotfil</h1></a></>
    )
}

