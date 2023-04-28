import { Card, CardBody, CardFooter, CardHeader,  Heading, Text, Button } from '@chakra-ui/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';
import CompDescText from './Comp_desc_text'
import MarkunreadIcon from '@mui/icons-material/Markunread';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import styles from './Card.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function CompanyDescription(){

    return(
        <div>
        <Card align='left' style={{ boxShadow: "2px  3px 5px gray"}}>
  <CardHeader>
    <Heading size='md' marginBottom='0px'>Company Details</Heading>
  </CardHeader>

  <CardBody>
  
  <div className={styles.gridContainer}>
    <CompDescText heading="Company: " icon={<BusinessIcon/>} value="Devsinc"/>
    <CompDescText heading="CEO: " icon={<AccountCircleIcon/>} value="Fizza Nasir"/>
    <CompDescText heading="Phone: " icon={<CallIcon/>} value="0426382922"/>
    <CompDescText heading="Email: " icon={<MarkunreadIcon/>} value="hr@devsinc.com"/>
    <CompDescText heading="Organization Size: " icon={<GroupsIcon/>} value="23"/>
    <CompDescText heading="Organization Type: " icon={<ApartmentIcon/>} value="Private"/>
    <CompDescText heading="Facebook: " icon={<FacebookIcon/>} value="www.facebook.com/FizzaNasir"/>
    <CompDescText heading="Instagram: " icon={<InstagramIcon/>} value="www.instagram.com/FizzaNasir"/>
    <CompDescText heading="Linkedin: " icon={<LinkedInIcon/>} value="www.linkedin.com/Fizza_Nasir"/>
    </div>
  </CardBody>
</Card>
</div>
)}