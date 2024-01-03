import React from 'react'
import {useParams} from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function Rome() {
    const {roomId} = useParams();

    const myMetting = async(element)=>{
        const appID = 1162163686;
        const serverSecret = "7a618316ffe2704494831b11b16fdd98";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID , serverSecret , roomId , Date.now().toString() , "Ankush Dhiman")
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:"Copy Link",
                    url:`http://localhost:5173/room/${roomId}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton:true,
        })
    }

  return (
    <>
    <div>
        <div ref={myMetting}/>
    </div>
    </>
  )
}

export default Rome