import React, {useRef} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion'

export const DPChild:React.FC<{
    item_str?:string,
    item_obj?:React.Element,
    delay:number,
    _style:object,
    classname?:string,
    randomPos?:boolean
}> = ({item_str,item_obj, delay,_style, classname, randomPos=false}) => {
    let child = React.Element;
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();

    const maxW = videoConfig.width*0.7
    const maxH = videoConfig.height*0.7;
    
    const y = Math.floor(Math.random()*maxH);
    const x = Math.floor(Math.random()*maxW);
    
    console.log('[-] Bad style: ',_style)
    
    const newStyle = useRef({
        ..._style,
        marginTop:y,
        marginLeft:x
    });
    console.log('_style: ',_style)
    console.log('newStyle: ',newStyle)
    if(item_str){
        let opacity;
        if(frame > delay){
            child = <span className={classname} style={_style}>{item_str+' '}</span>
        }else{
            child = <></>
        }
    }else if(item_obj['type'] == "image"){
        if(frame > delay){

            if(randomPos){
                child = <img className={classname} src={item_obj["src"]} style={newStyle.current}/>   
            }else{
                child = <img className={classname} src={item_obj["src"]} style={_style}/>
            }
        }else{
            child = <></>
        }
    }

    return(child);
}   