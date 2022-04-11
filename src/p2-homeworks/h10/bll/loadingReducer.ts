const initState: boolean = false

export const loadingReducer = (state = initState, action: loadingAC): boolean => {
    switch (action.type) {
        case "STARTED-LOADING":
        {
            return action.payload.value
        }
        default: return state
    }
}
type loadingAC = ReturnType<typeof loadingAC>
export const loadingAC = (value: boolean) => {
    return  {
        type: "STARTED-LOADING",
        payload:{
            value
        }
    } as const
}