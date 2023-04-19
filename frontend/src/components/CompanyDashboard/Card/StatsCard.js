import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
export default function StatsCard({text, stats, icon}){

    return(
        <Card style={{  padding: '0px 10px 0px 10px',
         width: '200px',
         overFlow: 'hidden',
         boxShadow: "2px  3px 5px gray",
         borderRadius: "10px",
         fontFamily: 'Anuphan, sans-serif',
         }}>
          <CardBody style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems: 'center' }}>
              <Text style={{fontSize: "18px",  color: 'gray'}}>{text}</Text>
              <div style={{marginLeft:'8px', color: 'teal', fontSize: '25px'}}>{icon}</div>
             
            </div>

            <Text style={{fontSize: "20px"}}>{stats}</Text>
          </CardBody>
        </Card>
    )
}