/*

  `layout` and `page` file names are special under this /app directory

  layout.jsx (or layout.js, layout.tsx, etc.) is a special
    file that acts as a "wrapper" around all the page.jsx (or page.js, etc.) files
    at this folder level. This is particularly helpful if you want pages of a
    certain path (for example, mywebsite.com/team/TEAM_MEMBER_HERE) to have
    the same structure

*/

import './globals.css'

export const metadata = {
  title: 'Rizzinator',
  description: 'building the Rizzinator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
