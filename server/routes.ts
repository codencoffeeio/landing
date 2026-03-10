import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import ical from "node-ical";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.get("/api/meetup-events", async (req, res) => {
    try {
      // ical.async.fromURL doesn't perfectly type the options argument in TS, 
      // so we use fetch to get the string first to ensure headers are sent
      const response = await fetch("https://www.meetup.com/code-coffee-auckland/events/ical/", {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/calendar'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch ICS: ${response.statusText}`);
      }

      const icsString = await response.text();
      const data = ical.sync.parseICS(icsString);

      const events: any[] = [];
      for (let k in data) {
        if (data.hasOwnProperty(k)) {
          const ev = data[k] as any;
          if (ev.type === 'VEVENT') {
            events.push({
              title: ev.summary,
              link: (ev.uid as string)?.replace('event_', 'https://www.meetup.com/code-coffee-auckland/events/').replace('@meetup.com', '') || 'https://www.meetup.com/code-coffee-auckland/events/',
              pubDate: ev.start?.toISOString(),
              description: ev.description,
            });
          }
        }
      }

      // Sort by date ascending (closest first) and take top 3
      // We also filter out events that have already passed
      const now = new Date();
      const upcomingEvents = events
        .filter(e => new Date(e.pubDate).getTime() > now.getTime())
        .sort((a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime());

      res.json(upcomingEvents.slice(0, 3));
    } catch (error) {
      console.error("Failed to fetch Meetup events:", error);
      res.status(500).json({ error: "Failed to fetch Meetup events" });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
