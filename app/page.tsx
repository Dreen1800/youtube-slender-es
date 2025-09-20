import MainFlow from "@/components/MainFlow"

// Force dynamic rendering for server components that use headers/cookies
export const dynamic = 'force-dynamic'

export default function HomePage() {
  return <MainFlow />
}
