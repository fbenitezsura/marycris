import Providers from "@modules/providers"
import "styles/globals.css"
import '@splidejs/react-splide/css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-mode="light">
      <body className="bg-white">
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
