import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function LeagueOfLegendsPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">League of Legends Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            League of Legends is one of MESA&apos;s largest game, sporting
            upwards of 5 teams across all skill levels. We have space for
            everyone, from our elite CLOL A team (high Masters+) to our more
            casual CLOL G team (Gold and under). Our teams represent McGill as
            they compete in the Collegiate League of Legends tournaments for
            cash prizes of up to $50,000. CLOL will be holding tryouts on
            September 15th at 12pm.
          </p>
          <h3 className="font-semibold mb-2">Competition Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>
                Collegiate League of Legends Fall Warm-Up (Late
                September-October)
              </strong>{" "}
              A Riot-sponsored tournament with one match every Saturday for the
              duration.
            </li>
            <li>
              <strong>CCL (Sept 16th - Nov 25th):</strong> A Riot-sponsored
              tournament with one match per week and increasing rewards based on
              team placement.
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
              Anybody interested in playing League of Legends competitively!
            </li>
            <li>
              Time commitment will vary depending on which team you&apos;re on;
              for our A team it&apos;s expected that you&apos;re available for
              15 games/week for scrims, while the other teams decide their
              commitment themselves. We do expect all players to be willing to
              scrim at least once a week.
            </li>
          </ul>
          <br></br>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSepejMZs9jCIhyNViZHiVW3EUAeQOvQBAkidZEs-oiWwg_U4g/viewform?usp=sf_link"
            target="_blank"
          >
            <Button className="bg-mcgill hover:bg-mcgill-vibrant">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
        <ResultCard
          tournamentName="2024 CLOL East"
          logo="/league-of-legends/clol.png"
          result="CLOL A Championship Division placement"
        />
        <ResultCard
          tournamentName="2023 Fall Warm-Up"
          logo="/league-of-legends/clol_warmup.png"
          result="CLOL B 2nd in group"
        />
        {/* Add more ResultCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4">CLOL A 2023</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="Hazeux"
          role="Toplaner"
          icon="/league-of-legends/Hazeux.jpg"
        />
        <TeamMemberCard
          name="FeatherSlash"
          role="Toplaner"
          icon="/league-of-legends/FeatherSlash.jpg"
        />
        <TeamMemberCard
          name="rainyday"
          role="Jungle"
          icon="/league-of-legends/rainyday.jpg"
        />
        <TeamMemberCard
          name="cnjz"
          role="Jungle"
          icon="/league-of-legends/cnjz.png"
        />
        <TeamMemberCard
          name="NxRd"
          role="Mid"
          icon="/league-of-legends/NxRd.jpg"
        />
        <TeamMemberCard
          name="RequiemPhA"
          role="Mid"
          icon="/league-of-legends/RequiemPhA.jpg"
        />
        <TeamMemberCard
          name="Greyhound"
          role="ADC"
          icon="/league-of-legends/Greyhound.jpg"
        />
        <TeamMemberCard
          name="GRIS"
          role="ADC"
          icon="/league-of-legends/GRIS.jpg"
        />
        <TeamMemberCard
          name="Vasticious"
          role="Support"
          icon="/league-of-legends/Vasticious.jpg"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4 pt-4">CLOL B 2023</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="FeatherSlash"
          role="Top"
          icon="/league-of-legends/FeatherSlash.jpg"
        />
        <TeamMemberCard
          name="Cosmo"
          role="Jungle"
          icon="/league-of-legends/Cosmo.jpg"
        />
        <TeamMemberCard
          name="Vasticious"
          role="Jungle"
          icon="/league-of-legends/Vasticious.jpg"
        />
        <TeamMemberCard
          name="Meeps"
          role="Mid"
          icon="/league-of-legends/Meeps.jpg"
        />
        <TeamMemberCard
          name="Boggodib"
          role="ADC"
          icon="/league-of-legends/Boggodib.jpg"
        />
        <TeamMemberCard
          name="gemi"
          role="Support"
          icon="/league-of-legends/gemi.jpg"
        />
        <TeamMemberCard
          name="BrokenBenis"
          role="Support"
          icon="/league-of-legends/BrokenBenis.jpg"
        />
        <TeamMemberCard
          name="dxnsity"
          role=""
          icon="/league-of-legends/dxnsity.jpg"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>

      <h2 className="text-2xl font-semibold mb-4 pt-4">CLOL B 2023</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard
          name="La1n"
          role="Top"
          icon="/league-of-legends/La1n.jpg"
        />
        <TeamMemberCard
          name="LAMINE YAMAL"
          role="Jungle"
          icon="/league-of-legends/LAMINE YAMAL.jpg"
        />
        <TeamMemberCard
          name="Br0kxn"
          role="Jungle"
          icon="/league-of-legends/Br0kxn.png"
        />
        <TeamMemberCard
          name="Grape"
          role="Mid"
          icon="/league-of-legends/Grape.jpg"
        />
        <TeamMemberCard
          name="Juicebox"
          role="ADC"
          icon="/league-of-legends/Juicebox.jpg"
        />
        <TeamMemberCard
          name="Saieu"
          role="Support"
          icon="/league-of-legends/Saieu.jpg"
        />
        <TeamMemberCard
          name="Celem"
          role="Support"
          icon="/league-of-legends/Celem.jpg"
        />
        {/* Add more TeamMemberCards as needed */}
      </div>
    </div>
  );
}
