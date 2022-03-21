import React from 'react';
import {useCurrentFrame} from 'remotion'

export const DPChild:React.FC<{
    item_str?:string,
    item_obj?:React.Element,
    delay:number,
    _style:object
}> = ({item_str,item_obj, delay,_style}) => {
    let child = React.Element;
    const frame = useCurrentFrame();
    if(item_str.length > 0){
        let opacity;
        if(frame > delay){
            opacity=1;
        }else{
            opacity=0;
        }
        let style = JSON.parse(JSON.stringify(_style));
        style["opacity"] = opacity;
        child = <span style={style}>{item_str+' '}</span>
    }

    return(child);
}   