import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function OverwatchPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Overwatch Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our Overwatch 2 team represents McGill in the Overwatch Collegiate
            Homecoming, a tournament that spans both the Fall and Winter
            semester, for prizes up to $20,000.
          </p>
          <h3 className="font-semibold mb-2">Competitive Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Overwatch Collegiate Homecoming:</strong> Fall tournament
              starting September 28th hosted by Activision-Blizzard and Radiant.
            </li>
            <li>
              Teams are free to join additional tournaments at their discretion.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Recruitment</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Who are we looking for?</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Players of any skill level who are interested in competitive
              Overwatch!
            </li>
            <li>
              We expect you to be able to scrim other teams 2-4 times per week.
            </li>
          </ul>
          <Link href="https://forms.gle/2WmcpHag9gK6Y4ub8" target="_blank">
            <Button className="bg-mcgill hover:bg-mcgill-vibrant">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
        <ResultCard
          tournamentName="Overwatch Collegiate Homecoming 2023"
          logo="/overwatch-2/homecoming.png"
          result="Top 20% out of 340 teams"
        />
        {/* Add more ResultCards as needed */}
      </div>
    </div>
  );
}
