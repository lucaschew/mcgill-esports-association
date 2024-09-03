import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeamPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Valorant</h1>
      <Card>
        <CardHeader>
          <CardTitle>About Our Valorant Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Information about the Valorant team goes here. Include details about
            team members, achievements, upcoming tournaments, and more.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
