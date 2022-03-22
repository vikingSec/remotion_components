import React from 'react';
import {Sequence, useCurrentFrame} from 'remotion'
import {DPChild} from './delayPopChild';

export const DelayPop:React.FC<{
    str?:string,
    arr?:Array<React.Element>
    delays:Array<number>
    _style?:Object,
    startFrame:number,
    classname?:string,
    randomPos?:boolean,
    delimiter?:string
}> = ({delimiter=' ',classname,str,arr,delays, _style={}, startFrame, randomPos=false}) =>
{
    const rendered = Array();
    const frame = useCurrentFrame();
    for(let i = 0; i<delays.length; i++){
        if(str){

            rendered.push(
                <DPChild classname={classname} item_str={str.split(delimiter)[i]} delay={startFrame+delays[i]} _style={_style}/>
            );
        
        }else{
            rendered.push(
                <DPChild classname={classname} item_obj={{"type":"image","src":arr[i]}} delay={startFrame+delays[i]} _style={_style} randomPos={randomPos}/>
            );
        }
    }

    return(
        <>
            {rendered}
        </>
    );
}