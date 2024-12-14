import './globals.css'

export const metadata = {
  title: 'NextJS App',
  description: 'Starter package for NextJS apps'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
