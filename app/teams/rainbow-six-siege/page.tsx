import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ResultCard = ({
  tournamentName,
  logo,
  result,
}: {
  tournamentName: string;
  logo: string;
  result: string;
}) => (
  <Card className="w-full sm:w-1/2 md:w-1/3 p-4">
    <CardHeader>
      <Image src={logo} alt={tournamentName} width={50} height={50} />
      <CardTitle className="text-lg">{tournamentName}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{result}</p>
    </CardContent>
  </Card>
);

const TeamMemberCard = ({
  name,
  role,
  icon,
}: {
  name: string;
  role: string;
  icon: string;
}) => (
  <Card className="w-full sm:w-1/2 md:w-1/3 p-4">
    <CardHeader>
      <Image
        src={icon}
        alt={name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <CardTitle className="text-lg">{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{role}</p>
    </CardContent>
  </Card>
);

export default function RainbowSixSiegePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Rainbow Six: Siege Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The McGill R6 team is a competitive Rainbow Six: Siege squad
            representing McGill University. We have a strong track record in
            collegiate leagues and are constantly looking to improve and expand
            our roster.
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>CR6 (Sept 21 - Early December):</strong> A long-standing
              collegiate league in NA. One match per week.
            </li>
            <li>
              <strong>CCL (Sept 16th - Nov 25th):</strong> A new collegiate
              Canadian league. One match per week.
            </li>
            <li>
              <strong>Open tournaments:</strong> Participation depends on team
              availability.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recruitment</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Who are we looking for?</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              McGill students with any level of experience in R6 (PC) interested
              in competitive play.
            </li>
            <li>
              Players available for a few hours on match nights (normally from
              8pm onwards).
            </li>
            <li>Main roster: 3-5 nights/week availability.</li>
            <li>Substitutes: Flexible scheduling with less time commitment.</li>
          </ul>
          <Link href="https://forms.gle/1c9ySu4KY6ykoj736" target="_blank">
            <Button>Join Our Team</Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        <ResultCard
          tournamentName="CR6 Fall 2023"
          logo="/cr6-logo.png"
          result="Reached playoffs"
        />
        <ResultCard
          tournamentName="CR6 Spring 2023"
          logo="/cr6-logo.png"
          result="Reached playoffs"
        />
        {/* Add more ResultCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
      <div className="flex flex-wrap gap-4">
        <TeamMemberCard
          name="Mori"
          role="Team Captain"
          icon="/rainbow-six-siege/Mori.png"
        />
        <TeamMemberCard
          name="kai-kea"
          role="Entry Fragger"
          icon="/rainbow-six-siege/kai-kea.png"
        />
        <TeamMemberCard
          name="Melkor"
          role="Second Entry"
          icon="/rainbow-six-siege/Melkor.png"
        />
        <TeamMemberCard
          name="Csar"
          role="Flex"
          icon="/rainbow-six-siege/Csar.png"
        />
        <TeamMemberCard
          name="jjanethe"
          role="Support"
          icon="/rainbow-six-siege/jjanethe.png"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>
    </div>
  );
}
