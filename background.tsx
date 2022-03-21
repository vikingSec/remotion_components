import React from "react";

export const Background:React.FC<{
    col:string
    sizeW:number,
    sizeH:number
}> = ({col,sizeW,sizeH}) => {
    return (
        <div style={{
            backgroundColor:col,
            color:col,
            width:sizeW,
            height:sizeH,
        }}>
        </div>
    );
}