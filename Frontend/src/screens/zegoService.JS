import ZegoExpressEngine from "zego-express-engine-webrtc";

const appID = 1751982289; // Replace with your App ID
const server = "wss://webliveroom1751982289-api.coolzcloud.com/ws"; // ZegoCloud WebSocket URL
const userID = `user_${Date.now()}`;
const userName = "YourUserName";

let zg = null;

export const initZegoCloud = async () => {
    zg = new ZegoExpressEngine(appID, server);
    
    const isCompatible = await zg.checkSystemRequirements();
    if (!isCompatible.webRTC) {
        console.error("WebRTC is not supported in this browser.");
        return;
    }

    try {
        await zg.loginRoom("room1", "YOUR_APP_SIGN", { userID, userName });
        console.log("Login Successful");
    } catch (error) {
        console.error("Login Failed:", error);
    }
};

export const startPublishing = async (streamID) => {
    const localStream = await zg.createStream({
        camera: { video: true, audio: true }
    });

    const videoElement = document.createElement("video");
    videoElement.srcObject = localStream;
    document.getElementById("localVideoContainer").appendChild(videoElement);

    zg.startPublishingStream(streamID, localStream);
};

export const startPlaying = async (streamID) => {
    const remoteStream = await zg.startPlayingStream(streamID);

    const remoteVideoElement = document.createElement("video");
    remoteVideoElement.srcObject = remoteStream;
    document.getElementById("remoteVideoContainer").appendChild(remoteVideoElement);
};
