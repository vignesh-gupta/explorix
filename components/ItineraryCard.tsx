import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import hero from "../public/hero.jpg";

type ItineraryCardProps = {
  destination: string;
  budget: string;
  duration: string;
  imgUrl: string;
  id: string;
};

const ItineraryCard = ({
  budget,
  destination,
  imgUrl,
  duration,
  id,
}: ItineraryCardProps) => {
  const router = useRouter();

  return (
    <Card
      className="pb-2 gap-2 justify-between group transition-transform duration-200 "
      isPressable
      onPress={() => router.push(`/itinerary/${id}`)}
    >
      <CardHeader className="h-2/3 pb-0 mt-2 group-hover:mt-0 px-4 flex-col overflow-hidden items-start ">
        <Image
          loading="lazy"
          width={300}
          height={400}
          alt="Card background"
          className="object-fill w-full h-full rounded-xl overflow-hidden group-hover:scale-150 transition-transform duration-200 "
          src={imgUrl}
        />
      </CardHeader>
      <CardBody className="grow py-2 h-auto overflow-visible transition-transform duration-200">
        <p className="text-tiny uppercase font-bold">{duration} days</p>
        <small className="text-default-500">$ {budget}</small>
        <h4 className="font-bold text-large">{destination}</h4>
      </CardBody>
    </Card>
  );
};

export default ItineraryCard;
