import {Text} from '@chakra-ui/react'

export default function CompDescText({heading,icon, value}){
    return(
        <>
        <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <p style={{color:'teal' ,fontSize:"30px", marginRight: "8px"}}>{icon}</p>
           <strong><p style={{ fontSize:"18px", fontStyle:"oblique"}}>{heading}</p></strong>
        </div>  
        <div style={{fontSize:"18px", marginTop: "10px"}}>
        <Text >{value}</Text>
        </div>
        </>
    )
}