import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeamPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Rocket League</h1>
      <Card>
        <CardHeader>
          <CardTitle>About Our Rocket League Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Information about the Rocket League team goes here. Include details
            about team members, achievements, upcoming tournaments, and more.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
