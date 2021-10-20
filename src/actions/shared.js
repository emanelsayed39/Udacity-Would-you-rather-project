import {getInitialData} from '../utils/api';
import receiveTweets from './tweets';
import { receiveUsers } from './users';
import { setAuthUser } from './authUser';

const authUser_id='tylermcginnis';

export function handleInitialData(){

    return(dispatch)=>{
        return getInitialData()
        .then(({users,tweets})=>{
            dispatch(receiveTweets(tweets));
            dispatch(receiveUsers(users));
            dispatch(setAuthUser(authUser_id));
        })
    }
}



