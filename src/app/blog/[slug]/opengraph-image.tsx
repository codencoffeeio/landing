import { ImageResponse } from "next/og";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const title = post?.title ?? "Code, Coffee & AI";
  const tags = post?.tags?.slice(0, 3) ?? [];
  const readTime = post?.readTime ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#13151a",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #f59e0b, #d97706)",
          }}
        />

        {/* Tags */}
        <div style={{ display: "flex", gap: "10px" }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                backgroundColor: "#1e2128",
                border: "1px solid #2a2d35",
                color: "#a0a0a0",
                fontSize: "14px",
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: "999px",
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? "42px" : "52px",
            fontWeight: 800,
            color: "#ededed",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: "960px",
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#f59e0b",
              letterSpacing: "-0.01em",
            }}
          >
            Code, Coffee & AI
          </div>
          {readTime && (
            <div style={{ fontSize: "16px", color: "#666", fontWeight: 500 }}>
              {readTime}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
