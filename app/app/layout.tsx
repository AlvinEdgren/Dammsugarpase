export const metadata = {
  title: "Dammsugarpase",
  description: "Dammsugarpase.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
