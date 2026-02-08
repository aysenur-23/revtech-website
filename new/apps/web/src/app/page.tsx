import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to Turkish locale by default
  redirect('/tr')
}
