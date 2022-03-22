import React from "react";
import {useVideoConfig} from 'remotion';

export const RoundedBox:React.FC<{
    inner:React.FC,
    sizeW:string,
    sizeH:string,
    fill:string,
    border:string,
    center?:boolean,
    _style?:Object
}> = ({_style={},inner,sizeW,sizeH,fill,border,center=true}) => {
    const vc = useVideoConfig();
    return(
        <div style={{
            ..._style,
            width:sizeW,
            height:sizeH,
            backgroundColor:fill,
            border:border,
            borderRadius:"15px",
            marginTop: center ? "auto" : (vc.height-sizeH)/2,
            marginBottom: center ? "auto" : 0,
            marginLeft:center ? "auto" : 0,
            marginRight: center ? "auto" : 0,
            marginTop: center ? "auto" : 0
        }}>
            {inner}
        </div>
    );
}