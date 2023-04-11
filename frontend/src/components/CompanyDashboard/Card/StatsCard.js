import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'

export default function StatsCard({text, stats}){

    return(
        <Card style={{  padding: '0px 10px 0px 10px', width: '200px',overFlow: 'hidden', boxShadow: "2px  3px 5px gray" }}>
          <CardBody style={{ display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems: 'center' }}>
            <Text style={{fontSize: "20px"}}>{text}</Text>
            <Text style={{fontSize: "20px"}}>{stats}</Text>
          </CardBody>
        </Card>
    )
}