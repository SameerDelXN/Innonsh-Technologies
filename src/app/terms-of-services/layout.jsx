export const metadata = {
  metadataBase: new URL("https://www.innonsh.com"),  // ✅ Add this
  title: "Terms of Service - Innonsh Technologies",
  description: "Read the Terms of Service for Innonsh Technologies. Learn about our service agreements, intellectual property, liability, communication policies, and termination conditions.",
  keywords: [
    "Terms of Service",
    "Innonsh Technologies",
    "Software Development Agreement",
    "Intellectual Property",
    "Liability Policy",
    "Service Terms",
    "Tech Solutions Agreement"
  ],
  author: "Innonsh Technologies",
  robots: "index, follow",
  openGraph: {  // ✅ Use openGraph instead of og
    title: "Terms of Service - Innonsh Technologies",
    description: "Understand the terms and conditions for using Innonsh Technologies' software development services.",
    type: "website",
    url: "https://www.innonsh.com/terms-of-service",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Innonsh Technologies",
    description: "Read the terms and conditions of using Innonsh Technologies' services.",
  },
};

// ✅ Move viewport outside metadata
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Layout({ children }) {
  return <>{children}</>;
}
