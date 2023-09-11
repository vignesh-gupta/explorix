import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

const ItineraryCard = () => {
  return (
    <Card className="py-4" isPressable>
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1682685797303-0ad51eb23e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        width={270}
      />
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <p className="text-tiny uppercase font-bold">Daily Mix</p>
      <small className="text-default-500">12 Tracks</small>
      <h4 className="font-bold text-large">Frontend Radio</h4>
    </CardBody>
  </Card>
  )
}

export default ItineraryCard