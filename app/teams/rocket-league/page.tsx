import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function RocketLeaguePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Rocket League Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The McGill Rocket League competes in the Playfly College Open
            Premier and Plus leagues, as well as other open tournaments. We
            currently have an A team consisting of GC+ players, and a B team
            consisting of Champ+ players.
          </p>
          <h3 className="font-semibold mb-2">Competitive Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>Playfly College Esports:</strong> Mondays at 7:00pm.
            </li>
            <li>
              <strong>CRL & College Carball Association Tournaments:</strong>
              Throughout the Fall and Spring semesters.
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
              Students at least Diamond+ who want to play Rocket League
              competitively.
            </li>
            <li>
              As per CRL rules, only full-time students can participate in
              Collegiate Rocket League.
            </li>
            <li>
              We will recruit as many players as there is interest for teams!
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
          tournamentName="2024 RLCS Open Qualifier"
          logo="/rocket-league/RLCS.png"
          result="385th/900"
        />
        <ResultCard
          tournamentName="2023 CRL Fall 2023"
          logo="/rocket-league/CRL.png"
          result="193rd/238"
        />
        <ResultCard
          tournamentName="2023 Telus Esports Division 1"
          logo="/rocket-league/Telus.png"
          result="18th/32nd "
        />
        {/* Add more ResultCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4">A Team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard name="last" role="" icon="/rocket-league/last.jpg" />
        <TeamMemberCard
          name="napeel"
          role=""
          icon="/rocket-league/napeel.jpg"
        />
        <TeamMemberCard name="rav" role="" icon="/rocket-league/rav.jpg" />
        <TeamMemberCard name="Karim" role="" icon="/rocket-league/Karim.jpg" />
        {/* Add more TeamMemberCards as needed */}
      </div>
    </div>
  );
}
