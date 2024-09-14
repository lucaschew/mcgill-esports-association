import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export interface TeamMemberCardProps {
  name: string;
  role: string;
  icon: string;
}

export default function TeamMemberCard(props: TeamMemberCardProps) {
  return (
    <Card className="p-2">
      <CardHeader className="flex flex-col items-center space-y-1 pb-2">
        <div className="w-[100px] h-[100px] relative">
          <Image
            src={props.icon}
            alt={props.name}
            fill
            sizes="100px"
            className="rounded-full object-cover"
          />
        </div>
        <CardTitle className="text-base text-center">{props.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-center">{props.role}</p>
      </CardContent>
    </Card>
  );
}
