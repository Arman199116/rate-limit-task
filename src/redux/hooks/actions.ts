import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rateLimitActions } from "../rate-limit-slice";

export const useActions = () => {

    const actions = {
        ...rateLimitActions
    }

    const dispatch = useDispatch();

    return bindActionCreators(actions, dispatch);

}