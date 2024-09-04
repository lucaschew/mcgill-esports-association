import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";

export default function ValorantPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Valorant Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            In the past, the Overwatch team has mainly competed in Overwatch
            Collegiate Homecoming in the Fall & Winter semesters. We also scrim
            other collegiate teams for 2-4 hours a week and participate in other
            tourneys.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Recruitment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Players of any skill level are welcome! Please fill out this
            interest form to determine if/when we hold tryouts and how many
            teams we have!
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd82mT8H5Hs5WP5OiJ-v_4yfZLQVy1OiuhhdG22C7J1sjpNUg/viewform?ts=66ccc15a&edit_requested=true"
            target="_blank"
          >
            <Button>Join Our Team</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
