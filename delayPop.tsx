import React from 'react';
import {Sequence, useCurrentFrame} from 'remotion'
import {DPChild} from './delayPopChild';

export const DelayPop:React.FC<{
    str?:string,
    arr?:Array<React.Element>
    delays:Array<number>
    _style?:Object,
    startFrame:number
}> = ({str,arr,delays, _style, startFrame}) =>
{
    const rendered = Array();
    const frame = useCurrentFrame();
    for(let i = 0; i<delays.length; i++){
        if(str.length > 0){
            rendered.push(
                <DPChild item_str={str.split(' ')[i]} delay={startFrame+delays[i]} _style={_style}/>
            );
        
        }else{
            rendered.push(
                <div style={{display:"flex", flexDirection:"row", textAlign:"center", marginLeft:"auto",marginRight:"auto", width:"50%"}}>
                <Sequence from={delays[i]}>
                    {arr[i]}
                </Sequence>
                </div>
            );
        }
    }

    return(
        <>
            {rendered}
        </>
    );
}