import {UserType} from "../HW8";

type SortPeopleUpAction = {
    type: "sort up"
    payload: 'up'
}
type SortPeopleDownAction = {
    type: "sort down"
    payload: 'down'
}
type CheckPeopleAction = {
    type: 'check'
    payload: number
}

type ActionType = SortPeopleUpAction | CheckPeopleAction | SortPeopleDownAction

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort up': {
            const newStateUp = [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            return newStateUp
        }
        case 'sort down': {
            const newStateDown = [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
            return newStateDown
        }
        case 'check': {
            let adultsPeople = [...state.filter(s => s.age >= 18)]
            return adultsPeople
        }
        default:
            return state
    }
}