export const metadata = {
    title: "Enterprise Software Solutions - Innonsh Technologies",
    description: "Explore our cutting-edge enterprise software solutions, including custom development, cloud services, mobile apps, AI, cybersecurity, and more.",
    keywords: "Enterprise Software, Custom Software Development, Cloud Solutions, Mobile Development, AI, Cybersecurity, Data Analytics, Innonsh Technologies",
    openGraph: {
      title: "Enterprise Software Solutions - Innonsh Technologies",
      description: "Discover how Innonsh Technologies provides innovative enterprise solutions like software development, cloud computing, AI, and cybersecurity.",
      url: "https://www.innonsh.com/solutions",
      images: "/favicon-SVG.svg", // Update with actual image path
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
