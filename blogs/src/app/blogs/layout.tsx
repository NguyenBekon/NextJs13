import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs list",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
