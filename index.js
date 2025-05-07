import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function FunToursPage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Thank you for subscribing, ${email}! We'll be in touch.`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">956 Fun Tours</h1>
        <p className="text-center text-lg text-gray-300">
          Concerts. Games. Parties. Cold beer and a fun ride—956 style.
        </p>

        <Card className="bg-gray-800">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p>
              Welcome to 956 Fun Tours, owned and operated by Roberto Ramirez. We offer round-trip
              bus services to the hottest concerts, sports games, and events—with free beer on the
              bus to keep the good times rolling. Book your ticket, hop on, and let us handle the rest!
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <ul className="list-disc list-inside">
              <li>July 15 – Spurs vs. Rockets (San Antonio)</li>
              <li>August 12 – Bad Bunny Concert (Houston)</li>
              <li>September 9 – Cowboys Game Day (Dallas)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold">Book Your Spot</h2>
            <p>
              Reserve your seat today and join the party! All tours include round-trip transportation
              and unlimited beer during the ride. Must be 21+ to consume alcohol.
            </p>
            <Button className="w-full">View Ticket Options</Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold">Stay Updated</h2>
            <p>Sign up with your email and never miss an event:</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleSubscribe}>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}