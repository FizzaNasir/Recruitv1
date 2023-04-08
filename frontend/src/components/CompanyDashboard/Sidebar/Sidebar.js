import {
useDisclosure,
Drawer, 
DrawerOverlay, 
DrawerHeader, 
DrawerContent, 
DrawerBody,
Menu,
MenuButton,
IconButton,
} from '@chakra-ui/react'
import {
HamburgerIcon,
EmailIcon
} from '@chakra-ui/icons'


import {Image} from 'antd'
import{ AreaChartOutlined } from '@ant-design/icons'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useNavigate } from 'react-router-dom';
// import RecruuitLogo from '../../../assests/recruuitLogo.png'
import RecruuitLogo from '../../../assests/recruuitLogo.png'


import Cards from '../Card/Card'
function SideBar() {
  const navigate= useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const existingLink= '/company/company_dashboard'
  function handleButtonClick(key){
  navigate(`${existingLink}/${key}`)
  }

  return (
  <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon colorscheme='black'/>}
    variant='outline'
    onClick={onOpen}
  />
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><Image width={140} src={RecruuitLogo} /></DrawerHeader>
          <DrawerBody>
            {/* <Cards text="Dashboard" icon={<AreaChartOutlined/>} buttonClick={()=>handleButtonClick('dashboard')} /> */}
            <Cards text="Post a Job" icon={<BusinessCenterIcon/>} buttonClick={()=>handleButtonClick('postJob')} />
            <Cards text="Reviews" icon={<ReviewsIcon/>} buttonClick={()=>handleButtonClick('reviews')}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Menu>
    
  )
}
export default SideBar