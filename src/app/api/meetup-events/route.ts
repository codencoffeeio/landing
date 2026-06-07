import { NextResponse } from "next/server";
import ical from "node-ical";

export async function GET() {
  try {
    const response = await fetch("https://www.meetup.com/code-coffee-auckland/events/ical/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "text/calendar",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) throw new Error(`Failed to fetch ICS: ${response.statusText}`);

    const icsString = await response.text();
    const data = ical.sync.parseICS(icsString);

    const events: { title: string; link: string; pubDate: string; description: string }[] = [];
    for (const k in data) {
      const ev = data[k] as any;
      if (ev.type === "VEVENT") {
        events.push({
          title: ev.summary,
          link: (ev.uid as string)?.replace("event_", "https://www.meetup.com/code-coffee-auckland/events/").replace("@meetup.com", "") || "https://www.meetup.com/code-coffee-auckland/events/",
          pubDate: ev.start?.toISOString(),
          description: ev.description,
        });
      }
    }

    const now = new Date();
    const upcomingEvents = events
      .filter((e) => new Date(e.pubDate).getTime() > now.getTime())
      .sort((a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime());

    return NextResponse.json(upcomingEvents.slice(0, 3));
  } catch (error) {
    console.error("Failed to fetch Meetup events:", error);
    return NextResponse.json({ error: "Failed to fetch Meetup events" }, { status: 500 });
  }
}
