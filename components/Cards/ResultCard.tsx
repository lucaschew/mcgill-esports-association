import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export interface ResultCardProps {
  tournamentName: string;
  logo: string;
  result: string;
  link: string;
}

export default function ResultCard(props: ResultCardProps) {
  return (
    <Link
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="p-2 cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-col items-center space-y-1 pb-2">
          <Image
            src={props.logo}
            alt={props.tournamentName}
            width={100}
            height={100}
            className="mb-1"
          />
          <CardTitle className="text-base text-center">
            {props.tournamentName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-center">{props.result}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
