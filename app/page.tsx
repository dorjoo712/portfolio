import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from '@/components/theme-toggle';
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

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
      technologies: ['Javscript', 'Vue.js', 'Vuetify', 'Firebase'],
      picture: '/athlete-era-connect.png'
    },
    {
      company: 'SKSIS Mapper',
      info: 'Build and styled interactive web application for Predictive soil mapping service',
      link: 'https://mapper.sksis.ca',
      technologies: ['Javscript', 'Vue.js', 'TailwindCSS', 'Pinia', 'Vite'],
      picture: '/sksis-mapper.png'
    }
  ]

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div className="relative">
            <div className="pb-8 md:pb-20">
              <div className="flex items-center gap-4">
                <Image src="/profile.jpg" alt="Nyamdorj Gombodorj" width={200} height={200} className="h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 rounded-full" />
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-800 dark:text-zinc-100">
                    Dorj
                  </h1>
                  <h2 className="mt-1 text-md font-medium tracking-tight sm:text-lg">Front End Developer</h2>
                </div>
              </div>
              
              <div className="mt-6 max-w-sm text-sm leading-normal text-slate-700 dark:text-slate-400">
                <p>{"Hello, I'm Nyamdorj (Dorj) Gombodorj, a frontend developer with over 9 years of experience in the tech industry."}</p>
                <p className="mt-3">I specialize in building scalable web applications with modern JavaScript frameworks, creating robust design systems, and elevating user experiences.</p>
                <p className="mt-3">Driven by a passion for crafting high-performance, user-focused interfaces, I strive to deliver beautiful and functional digital experiences that make a global impact.</p>
                <div className="mt-5">
                  <a href="/dorj_gombo_resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Resume (opens in a new tab)" className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 text-slate-800 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 dark:text-slate-300 dark:ring-slate-300/10 dark:hover:bg-white/15 dark:hover:ring-slate-300/15 transition-transform hover:translate-y-1 focus-visible:translate-y-1 motion-reduce:transition-none translate-y-px">
                    <FileDown className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <a href="https://github.com/dorjoo712" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub" className="text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/dorj-gombo" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn" className="text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:dorjo.gd@gmail.com" className="text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50">
                <Mail className="h-6 w-6" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8 md:space-y-4">
              {experiences.map((exp) => (
                <Card key={exp.company} className="group">
                  <CardHeader>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-400">
                        {exp.period}
                      </p>
                      <CardTitle className="flex items-center gap-2 text-slate-700 dark:text-white">
                        {exp.position} - 
                        {exp.link ? (
                          <a href={exp.link} target='_blank' rel="noreferrer noopener" aria-label={exp.company + ' (opens in a new tab)'} className="transition-colors hover:text-slate-900 dark:hover:text-slate-300 group-hover:underline">{exp.company}</a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-normal text-slate-700 dark:text-slate-400">{exp.info}</p>
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
            <div className="space-y-8 md:space-y-4">
              {projects.map((project) => (
                <Card key={project.company} className="group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <a href={project.link} target='_blank' rel="noreferrer noopener" aria-label={project.company + ' (opens in a new tab)'} className="text-slate-700 transition-colors hover:text-slate-900 dark:text-white dark:hover:text-slate-200 group-hover:underline">{project.company}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative grid sm:grid-cols-8">
                      <div className="order-1 sm:col-span-6 mr-3">
                        <p className="text-sm leading-normal text-slate-700 dark:text-slate-400">{project.info}</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {project.technologies.map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-zinc-600/10 text-zinc-700 group-data-[hover]:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-[hover]:bg-white/10">{tech}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Image src={project.picture} alt={project.company} width={200} height={70} className="aspect-video object-cover rounded border-2 border-slate-100 transition group-hover:border-slate-200/30 order-2 sm:col-span-2 sm:translate-y-1 mt-4 sm:mt-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <Card>
              <CardHeader>
                <CardTitle>
                  Bachelor of Science in Computer Science
                </CardTitle>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-normal">Graduated in June 2014 from the Mongolian University of Science and Technology</p>
              </CardHeader>
            </Card>
          </section>
          <footer className="max-w-md pb-16 text-sm text-slate-700 dark:text-slate-300 sm:pb-0">
            <div className="flex content-center">
              <p>Built with <a href="https://nextjs.org/" className="font-medium" target="_blank" rel="noreferrer noopener" aria-label="Next.js (opens in a new tab)">Next.js</a> and <a href="https://tailwindcss.com/" className="font-medium" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">Tailwind CSS</a>.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
