import { ThunkDispatch,UnknownAction} from "@reduxjs/toolkit";
import {UsersInterface} from "./users.interface";

export type Dispatch = ThunkDispatch<UsersInterface, void, UnknownAction>;