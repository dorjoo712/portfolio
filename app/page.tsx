import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, GraduationCap, Github, Linkedin } from "lucide-react"

export default function Home() {
  const experiences = [
    {
      company: 'Immigrate Software',
      position: 'Software Developer',
      period: 'Oct 2017 - July 2024',
      info: 'Build and maintain web applications serving over 100,000 users, spearheading a successful Vue.js to React.js migration that achieved 40% performance improvements. Collaborated with cross-functional teams of developers, designers, and product managers to champion web accessibility best practices.',
      technologies: [
        'Javascript',
        'Typescript',
        'React',
        'Vue',
        'PHP',
        'Laravel',
        'Node.js',
        'PostgresSQL',
      ],
      link: 'https://www.immigrate.biz'
    },
    {
      company: 'Ecocapital',
      position: 'Frontend Developer',
      period: 'Jan 2017 - Sep 2019',
      info: 'Developed high-impact financial web application that reduced process time by 70% through optimized state management and modular architecture. Engineered reusable component system that improved development efficiency by 25%, establishing streamlined workflows and enhanced application performance.',
      technologies: [
        'Javascript',
        'Typescript',
        'Vue',
        'Node.js',
        'Express.js',
        'PostgresSQL',
        'HTML',
        'CSS',
      ]
    },
    {
      company: 'Modiw Soft Co',
      position: 'Web Developer',
      period: 'Feb 2014 - Sep 2016',
      info: 'Developer, maintained and shipped over 30 custom websites for high-profile clients websites. Built and maintained a centralized CakePHP admin portal for streamlined content management, while implementing responsive designs with full cross-browser compatibility and accessibility compliance.',
      technologies: [
        'Javascript',
        'JQuery',
        'HTML',
        'CSS',
        'PHP',
        'CakePHP',
        'MySQL'
      ],
      link: 'https://modiwsoft.com'
    }
  ]

  const projects = [
    {
      company: 'Athlete Era Connect',
      info: 'Developed, maintained, and shipped production code for a coaching management tool to help coaches plan efficiently, stay organized, and run effective practices.',
      link: 'https://portal.athlete-era.com',
      technologies: ['Javscript', 'Vue.js', 'Vuetify', 'Firebase']
    },
    {
      company: 'SKSIS Mapper',
      info: 'Build and styled interactive web application for Predictive soil mapping service',
      link: 'https://mapper.sksis.ca',
      technologies: ['Javscript', 'Vue.js', 'TailwindCSS', 'Pinia', 'Vite']
    }
  ]

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="pb-8">
              <div className="flex items-center gap-4">
                <Image src="/profile.jpg" alt="Nyamdorj Gombodorj" width={200} height={200} className="h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 rounded-full" />
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-800 dark:text-zinc-100">
                    Dorj
                  </h1>
                  <h2 className="mt-1 text-md font-medium tracking-tight sm:text-lg">Front End Developer</h2>
                </div>
              </div>
              
              <div className="mt-6 max-w-sm text-sm leading-normal">
                <p>My name is Nyamdorj (Dorj) Gombodorj and I am a frontend developer with over 9 years of experience working in the tech industry. I currently reside in Saskatoon, Canada.</p>
                <p className="mt-3">I am passionate about building beautiful and functional user interfaces.</p>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <a href="https://github.com/dorjoo712" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/nyamdorj-gombodorj" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:dorjo.gd@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </header>
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card key={exp.company}>
                  <CardHeader>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                        {exp.period}
                      </p>
                      <CardTitle className="flex items-center gap-2">
                        {exp.position}, {exp.company}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-normal">{exp.info}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {exp.technologies.map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-xs/5 font-medium forced-colors:outline bg-zinc-600/10 text-zinc-700 group-data-[hover]:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-[hover]:bg-white/10">{tech}</div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <section id="project" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <Card key={project.company}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {project.company}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-normal">{project.info}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-zinc-600/10 text-zinc-700 group-data-[hover]:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-[hover]:bg-white/10">{tech}</div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  BS in Computer Science
                </CardTitle>
                <p className="text-slate-600 text-sm leading-normal">Graduated June 2014 at Mongolian University of Science and Technology</p>
              </CardHeader>
            </Card>
          </section>
          <footer className="max-w-md pb-16 text-sm text-slate-600 sm:pb-0">
            <div className="flex content-center">
              <p>Built with <a href="https://nextjs.org/" className="font-medium" target="_blank" rel="noreferrer noopener" aria-label="Next.js (opens in a new tab)">Next.js</a> and <a href="https://tailwindcss.com/" className="font-medium" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">Tailwind CSS</a>.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
