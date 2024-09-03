import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Welcome to McGill Esports Association
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>About MESA</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The McGill Esports Association (MESA) is dedicated to fostering a
            vibrant gaming community within McGill University. We support
            various competitive esports teams and organize events for casual and
            competitive gamers alike.
          </p>
        </CardContent>
      </Card>
      <Separator className="my-8" />
      <h2 className="text-2xl font-semibold mb-4">Our Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "Rainbow Six: Siege",
          "League of Legends",
          "Rocket League",
          "Valorant",
          "Overwatch 2",
          "DOTA 2",
        ].map((game) => (
          <Card key={game}>
            <CardHeader>
              <CardTitle>{game}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn more about our {game} team and their achievements.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
