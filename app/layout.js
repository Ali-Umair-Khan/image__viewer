import './globals.css'

export const metadata = {
  title: "Let's explore the world",
  description: 'This is the image display app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
