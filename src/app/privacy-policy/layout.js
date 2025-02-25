export const metadata = {
    title: "Privacy Policy - Innonsh Technologies",
    description: "Read the Privacy Policy of Innonsh Technologies. Learn how we collect, use, and protect your personal information.",
    keywords: "Privacy Policy, Data Protection, Security, Personal Information, Innonsh Technologies, Data Usage",
    openGraph: {
      title: "Privacy Policy - Innonsh Technologies",
      description: "Learn how Innonsh Technologies collects, uses, and safeguards your data while delivering innovative software solutions.",
      url: "https://www.innonsh.com/privacy-policy",
      images: "/favicon-SVG.svg", // Update with the actual path to an image
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
