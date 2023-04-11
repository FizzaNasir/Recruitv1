import {
        IconButton,
        } from '@chakra-ui/react'
const Cards=({text, icon, buttonClick})=>{
return(
<>    
<button style={{ display: 'flex', alignItems: 'center', fontSize:"20px" }} onClick={buttonClick}>
      <IconButton
  variant='ghost'
  colorScheme='teal'
  aria-label='Call Sage'
  fontSize='23px'
  icon={icon}
/>{text}</button>

</>
)
}
export default Cards;