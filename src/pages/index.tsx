import { Layout } from '@/components/layout';
import { IntroSection } from '@/components/introSection';
import { AboutMeSection } from '@/components/aboutMeSection';

export default function Home() {
  return (
    <Layout>
      <IntroSection />
      <AboutMeSection />
    </Layout>
  )
}
