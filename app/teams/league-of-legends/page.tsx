import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeamPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">League of Legends</h1>
      <Card>
        <CardHeader>
          <CardTitle>About Our League of Legends Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Information about the League of Legends team goes here. Include
            details about team members, achievements, upcoming tournaments, and
            more.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
