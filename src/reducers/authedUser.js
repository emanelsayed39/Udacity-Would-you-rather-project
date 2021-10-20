import { setAuthUser } from "../actions/authUser"

export default function authedUser(state=null,action){
    switch(action.type)
    {
        case setAuthUser:
          return
            action.id
        default:
        return state
    }
}