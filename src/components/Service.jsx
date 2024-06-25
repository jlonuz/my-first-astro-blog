import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Service = ({ service }) => {
    const urlService = service.name
  return (
      <a href={`/services/${urlService.replace(/\s/g, '-').toLocaleLowerCase() }`}>
        <Card>
          <CardHeader>
            <CardTitle>{service.name}</CardTitle>
            <CardDescription>{service.emoji}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{service.description}</p>
          </CardContent>
          <CardFooter>
            <p class="text-sm text-gray-600 hover:text-black-600">Descubre más</p>
          </CardFooter>
        </Card>
      </a>


  );
};

export default Service;