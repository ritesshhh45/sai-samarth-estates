import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shri Sai Samarth Developers | Premium NA Plots" },
      { name: "description", content: "Buy premium residential and commercial NA plots from Shri Sai Samarth Developers. AMRDA approved layouts, clear title, modern amenities and investment opportunities in Aurangabad." },
      { name: "author", content: "Shri Sai Samarth Developers" },
      { name: "keywords", content: "NA plots, residential plots Aurangabad, commercial plots, AMRDA approved, Shendra plots, Shri Sai Samarth Developers" },
      { property: "og:title", content: "Shri Sai Samarth Developers | Premium NA Plots" },
      { property: "og:description", content: "Buy premium residential and commercial NA plots from Shri Sai Samarth Developers. AMRDA approved layouts, clear title, modern amenities and investment opportunities in Aurangabad." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shri Sai Samarth Developers" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shri Sai Samarth Developers | Premium NA Plots" },
      { name: "twitter:description", content: "Buy premium residential and commercial NA plots from Shri Sai Samarth Developers. AMRDA approved layouts, clear title, modern amenities and investment opportunities in Aurangabad." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/55c47d84-0e2c-4b41-b0f9-2ccb81136f5b/id-preview-55472932--b0c20490-9821-4ae3-9fab-0f8f44cca66f.lovable.app-1780541250562.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/55c47d84-0e2c-4b41-b0f9-2ccb81136f5b/id-preview-55472932--b0c20490-9821-4ae3-9fab-0f8f44cca66f.lovable.app-1780541250562.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Shri Sai Samarth Developers",
          telephone: "+91-8787545154",
          areaServed: "Aurangabad, Maharashtra",
          description: "Premium NA approved residential and commercial plot development.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
