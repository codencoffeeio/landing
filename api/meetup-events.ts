import type { VercelRequest, VercelResponse } from "@vercel/node";
import ical from "node-ical";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const response = await fetch(
            "https://www.meetup.com/code-coffee-auckland/events/ical/",
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    Accept: "text/calendar",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch ICS: ${response.statusText}`);
        }

        const icsString = await response.text();
        const data = ical.sync.parseICS(icsString);

        const events: any[] = [];
        for (let k in data) {
            if (data.hasOwnProperty(k)) {
                const ev = data[k] as any;
                if (ev.type === "VEVENT") {
                    events.push({
                        title: ev.summary,
                        link:
                            (ev.uid as string)
                                ?.replace(
                                    "event_",
                                    "https://www.meetup.com/code-coffee-auckland/events/"
                                )
                                .replace("@meetup.com", "") ||
                            "https://www.meetup.com/code-coffee-auckland/events/",
                        pubDate: ev.start?.toISOString(),
                        description: ev.description,
                    });
                }
            }
        }

        // Filter to upcoming events only, sort chronologically
        const now = new Date();
        const upcomingEvents = events
            .filter((e) => new Date(e.pubDate).getTime() > now.getTime())
            .sort(
                (a, b) =>
                    new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime()
            );

        res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
        res.status(200).json(upcomingEvents.slice(0, 3));
    } catch (error) {
        console.error("Failed to fetch Meetup events:", error);
        res.status(500).json({ error: "Failed to fetch Meetup events" });
    }
}
