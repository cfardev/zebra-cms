import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider } from "@clerk/nextjs"
import { esES } from "@clerk/localizations"
import { ConvexClientProvider } from "../providers/convex-client-provider"
import { SiteLayout } from "@/components/site-layout"

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Zebra CMS",
  description: "Zebra CMS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es">
        <body className={`${interSans.variable} ${interSans.variable} antialiased`}>
          <Script
            id="disable-service-worker"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for(let registration of registrations) {
                      registration.unregister();
                    }
                  });
                }
              `,
            }}
          />
          <ConvexClientProvider>
            <SiteLayout>{children}</SiteLayout>
            <Toaster />
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
