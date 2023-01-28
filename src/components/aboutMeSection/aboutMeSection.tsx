import { calculateMonthsBetweenDates } from '@/utils/dateCalc';

export const AboutMeSection = () => {
  const { years, months } = calculateMonthsBetweenDates(new Date(2021, 8), new Date());

  return (
    <section className="about-me-section">
      <div className="contain">
        <div className="biography">
          <strong className="opacity-75 mb-5">About Me</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            animi quae itaque magni eum ab? Aliquid esse quos impedit
            incidunt? Non pariatur explicabo, tenetur numquam cum deleniti?
            Impedit optio in non adipisci ut cumque voluptate libero facilis
            quod quae temporibus natus et harum consequuntur officia maxime
            aut, sit fugiat eius.
          </p>
        </div>
        <div className="wrapper">
          <div className="education">
            <strong className="text-sm opacity-75 mb-5">Education</strong>
            <div className="education-item">
              <div>
                <p className="font-medium">Web Development Program</p>
                <p >LearningFuze</p>
              </div>
              <div className="text-right">
                <p className="font-medium opacity-75">Graduated April 2021</p>
                <p className="opacity-75">4 months</p>
              </div>
            </div>
          </div>
          <div className="work-experience">
            <strong className="text-sm opacity-75 mb-5">Work Experience</strong>
            <div className="work-experience-item">
              <div className="">
                <p className="font-medium">Web Developer</p>
                <p className="opacity-75">Big Rig Media</p>
              </div>
              <div className="text-right">
                <p className="font-medium opacity-75">Aug 2021 - Present</p>
                <p className="opacity-75">{`${years} yr ${months} mos`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
