import type { Metadata } from "next";
import "./globals.css";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "BOSS Libraries | Find Your Next Move",
  description: "A trusted navigation layer connecting owner-operators to the right business resources at the right phase.",
  icons: { icon: `${assetBase}/boss-logo.png`, shortcut: `${assetBase}/boss-logo.png` },
  openGraph: {
    title: "BOSS Libraries | Stop searching. Start navigating.",
    description: "Six business phases. One clear route through the small-business ecosystem.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
