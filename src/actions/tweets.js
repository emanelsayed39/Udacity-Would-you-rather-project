export const RECEIVE_TWEETS='RECEIVE_TWEETS';


const receiveTweets =(tweets)=>{
return {

    type:RECEIVE_TWEETS,
    tweets
};


}

export default receiveTweets;