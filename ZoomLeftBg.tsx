import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";


export const ZoomLeftBG:React.FC<{
    inner:React.FC,
    startFrame?:number,
    endFrame?:number,
    startPoint?:number,
    endPoint?:number,
    sizeW:number,
    sizeH:number,
    spring?:boolean
}> = ({inner, startFrame=0, endFrame=20, startPoint=-5000, endPoint=0, sizeW, sizeH,spring=false}) => {
    
    const videoConfig = useVideoConfig();
    const {height, width, fps} = useVideoConfig();
    
    const frame = useCurrentFrame();
    
    let xPos;
    
    if(spring){
        xPos = spring({
            fps,
            from: startPoint,
            to: endPoint,
            frame,
            config:{
                damping:15
            }
        });
    }else{
        xPos = interpolate(frame, [startFrame,endFrame],[startPoint,endPoint], {extrapolateRight:"clamp"})
    }

    return(
        <div style={{
            position:"absolute",
            marginLeft:xPos,
            width:sizeW,
            height:sizeH,
            
        }}>
            {inner}
        </div>
    );
}