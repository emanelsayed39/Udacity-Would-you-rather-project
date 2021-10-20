import React from "react";
import { connect } from "react-redux";

const DashBoard=(props)=>{
    console.log(props);
return(
    <div>

        dashboard
    </div>
);

}

function mapStateToProps({tweets}){
    return{
        tweetIds:Object.keys(tweets).sort((a,b)=>{
         return tweets[b].timestamp- tweets[a].timestamp
        })
    }
}

export default connect(mapStateToProps)(DashBoard);
