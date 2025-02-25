export const metadata = {
    title: "About Us - Innonsh Technologies",
    description: "Learn more about Innonsh Technologies, our mission, vision, and the services we offer.",
    keywords: "Innonsh Technologies, software development, IT solutions, technology services",
    openGraph: {
      title: "About Us - Innonsh Technologies",
      description: "Discover more about Innonsh Technologies, our mission, vision, and values.",
      url: "https://www.innonsh.com/about",
      images: "/favicon-SVG.svg",
    },
    twitter: {
      card: "summary_large_image",
    },
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
  };
  
  export default function Layout({ children }) {
    return <>{children}</>;
  }
  