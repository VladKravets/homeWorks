export type StartLoadingType = {
    type: 'STARTED-LOADING',
    payload: {
        value: boolean,
    },
}
const initState = {
    value: false,
}


export const loadingReducer = (state = initState, action: StartLoadingType): typeof initState => {
    switch (action.type) {
        case "STARTED-LOADING": {
            return {
                ...state,
                value: action.payload.value
            }
        }
        default:
            return state
    }
}
export const loadingAC = (value: boolean):StartLoadingType => {
    return {
        type: "STARTED-LOADING",
        payload: { value },
    } as const
}