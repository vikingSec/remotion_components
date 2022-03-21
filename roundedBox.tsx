import React from "react";
import {useVideoConfig} from 'remotion';

export const RoundedBox:React.FC<{
    inner:React.FC,
    sizeW:string,
    sizeH:string,
    fill:string,
    border:string
}> = ({inner,sizeW,sizeH,fill,border}) => {
    const vc = useVideoConfig();
    return(
        <div style={{
            width:sizeW,
            height:sizeH,
            backgroundColor:fill,
            border:border,
            borderRadius:"15px",
            marginTop: (vc.height-sizeH)/2,
            marginBottom:"auto"
        }}>
            {inner}
        </div>
    );
}