import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {useEffect} from "react";
import {getUsers} from "../../store/slices/users/users.slice";
import MaterialTable from "material-table";
import {Grid2} from "@mui/material";

export const UserTable = () => {

    const columns = [
        {title: 'Name', field: 'name'},
        {title: 'Username', field: 'userName'},
        {title: 'Email', field: 'email'},
        {title: 'Phone', field: 'phone'},
    ]

    const {users} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    useEffect(() => {
        try {
            dispatch(getUsers())
        } catch (e) {
            console.log(e)
        }
    }, [dispatch])
    console.log(users, 'FFFF')
    return (
        <Grid2 container
               display={'flex'}
               alignItems={'center'}
               justifyContent={'space-between'}
               sx={{width: '100%'}}
        >
            <MaterialTable
                title={'Users'}
                width={'100%'}
                data={[]}
                columns={columns}
            />
        </Grid2>
    );
};



