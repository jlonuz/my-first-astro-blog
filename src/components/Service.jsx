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
  return (
    <a href={service.url}>
      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle>{service.name}</CardTitle>
          <CardDescription>{service.emoji}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{service.description}</p>
        </CardContent>
        <CardFooter>
          <p class="text-sm hover:text-gray-500">Descubre más<i class="fas fa-paper-plane pl-2">
            </i></p>
        </CardFooter>
      </Card>
    </a>
  );
};

export default Service;