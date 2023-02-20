import Link from 'next/link';
import { calculateMonthsBetweenDates } from '@/utils/dateCalc';

export const AboutMeSection = () => {
  const { years, months } = calculateMonthsBetweenDates(new Date(2021, 8), new Date());

  return (
    <section id="about-me" className="about-me-section">
      <div className="contain">
        <div className="biography">
          <strong className="opacity-70 mb-5 text-sm lg:text-base">About Me</strong>
          <p className="mb-4">
            After being inspired by the first SpaceX booster landing, I discovered my passion
            for technology and made the decision to pursue a career in the tech field in 2020. I
            delved into the subject of online business, web design, copywriting,
            marketing, and e-commerce, until I fell in love with the world of programming. I
            then took the leap and joined a coding bootcamp, where I learned the fundamentals
            of web development.
          </p>
          <p className="mb-4">
            Today, I am proud to hold the position of Web Developer at <Link href="https://www.bigrigmedia.com/" target="_blank" rel='noreferrer'>Big Rig Media</Link>, where I work
            with a variety of technologies on a regular basis. These include:
          </p>
          <ul className="mb-4 pl-8">
            <li>JavaScript (ES6+)</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>WordPress</li>
            <li>Figma</li>
            <li>Spline</li>
          </ul>
          <p>
            In my personal time, I continue to immerse myself in reading and programming to stay
            up-to-date with the latest advancements in the field.
          </p>
        </div>
        <div className="wrapper">
          <div className="work-experience">
            <strong className="text-sm lg:text-base opacity-70 mb-5">Work Experience</strong>
            <div className="work-experience-item">
              <div className="">
                <p className="font-medium">Web Developer</p>
                <p><em><Link href="https://www.bigrigmedia.com/" target="_blank" rel='noreferrer'>Big Rig Media</Link></em></p>
              </div>
              <div className="text-right">
                <p className="font-medium opacity-70"><em>Aug 2021 - Present</em></p>
                <p className="opacity-70">{`${years} yr ${months} mos`}</p>
              </div>
            </div>
          </div>
          <div className="education">
            <strong className="text-sm lg:text-base opacity-70 mb-5">Education</strong>
            <div className="education-item">
              <div>
                <p className="font-medium">Web Development Program</p>
                <p><em>LearningFuze</em></p>
              </div>
              <div className="text-right">
                <p className="font-medium opacity-70">Graduated April 2021</p>
                <p className="opacity-70">4 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
