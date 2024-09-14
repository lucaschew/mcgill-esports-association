import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const teams = [
  { name: "Rainbow Six: Siege", slug: "rainbow-six-siege" },
  { name: "League of Legends", slug: "league-of-legends" },
  { name: "Rocket League", slug: "rocket-league" },
  { name: "Valorant", slug: "valorant" },
  { name: "Overwatch 2", slug: "overwatch-2" },
  { name: "Apex Legends", slug: "apex" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>
          McGill Esports Association (MESA) - Official Esports at McGill
          University
        </title>
        <meta
          name="description"
          content="MESA is the official esports association for McGill University, organizing competitive teams, gaming events, cafe takeovers, and watch parties for students."
        />
        <meta
          name="keywords"
          content="McGill, Esports, MESA, Gaming, University, Montreal, Competitive Gaming"
        />
        <meta property="og:title" content="McGill Esports Association (MESA)" />
        <meta
          property="og:description"
          content="Join MESA, the official esports community at McGill University. Competitive teams, events, and more!"
        />
        <meta property="og:image" content="/mesa_zoomed.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mcgill-esports.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <h1 className="text-4xl font-bold mb-8">
          Welcome to the McGill Esports Association
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>About MESA</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The McGill Esports Association (MESA) is dedicated to fostering a
              vibrant gaming community within McGill University. We support
              various competitive esports teams and organize events for casual
              and competitive gamers alike.
            </p>
            <p className="mt-4">
              MESA goes beyond competitive gaming by organizing exciting events
              such as:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Gaming cafe takeovers</li>
              <li>Casual gaming nights</li>
              <li>Esports watch parties</li>
            </ul>
            <p className="mt-4">
              Whether you&apos;re a competitive player or just looking to have
              fun and meet fellow gamers, MESA has something for everyone in the
              McGill community!
            </p>
          </CardContent>
        </Card>
        <Separator className="my-8" />
        <h2 className="text-2xl font-semibold mb-4">Our Competitive Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teams.map((team) => (
            <Link href={`/teams/${team.slug}`} key={team.slug}>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={`/games/${team.slug}.png`}
                        alt={`${team.name} logo`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <CardTitle>{team.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Learn more about our {team.name} team and their
                    achievements.
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
