import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View details blog",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing",
};

export default function ViewDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
