import { Layout } from '@/components/layout';
import { IntroSection } from '@/components/introSection';
import { AboutMeSection } from '@/components/aboutMeSection';
import { ProjectsSection } from '@/components/projectsSection';
// import { ContactSection } from '@/components/contactSection';

export default function Home() {
  return (
    <Layout>
      <IntroSection />
      <ProjectsSection />
      <AboutMeSection />
      {/* <ContactSection /> */}
    </Layout>
  )
}
