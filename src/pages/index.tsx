import { Layout } from '@/components/layout';
import { IntroSection } from '@/components/introSection';
import { AboutMeSection } from '@/components/aboutMeSection';
import { ProjectsSection } from '@/components/projectsSection';

export default function Home() {
  return (
    <Layout>
      <IntroSection />
      <ProjectsSection />
      <AboutMeSection />
    </Layout>
  )
}
