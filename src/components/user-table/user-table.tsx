import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {useEffect} from "react";
import {getUsers} from "../../store/slices/users/users.slice";
import MUIDataTable, {MUIDataTableOptions} from "mui-datatables";
import {Dispatch} from "../../store/interfaces/dispatch.interface";
import {CircularProgress} from "@mui/material";

export const UserTable = () => {
    const result = useAppSelector(state => state.users)
    const {data} = result.users
    const dispatch: Dispatch = useAppDispatch()
    useEffect(() => {
        try {
            dispatch(getUsers())
        } catch (e) {
            console.log(e)
        }
    }, [dispatch])

    const columns = ['name', 'username', 'email', 'phone']
    const options: MUIDataTableOptions | undefined = {
        filterType: 'checkbox',
        pagination: false
    };
    return (
        <>
            {data?.length ? <MUIDataTable
                title={"Users List"}
                data={data}
                columns={columns}
                options={options}
            /> : <CircularProgress/>}
        </>
    );
};



