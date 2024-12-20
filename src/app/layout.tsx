import { SiteHeader } from "@/components/ui/site-header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/lib/providers";
import { Toaster } from "sonner";
import { ErrorBoundary } from '@/components/error-boundary';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Shagun",
  description: "Modern way to collect wedding gifts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <Providers>
        <ErrorBoundary>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1 flex flex-col">
              <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </div>
        </ErrorBoundary>
        <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  );
}