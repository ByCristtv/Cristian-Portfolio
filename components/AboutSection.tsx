import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

export const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {" "}
      <div className='container max-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
          About <span className='text-primary'> Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6 gradient-border p-6 rounded-lg'>
            <h3 className='font-semibold text-2xl'>
              Software Engineer & Web Developer
            </h3>
            <p className='text-muted-foreground'>
              Graduated with a degree in Computer Engineering.
              I have a passion for creating web applications that are not only functional but also visually appealing.
              
            </p>
            <p className='text-muted-foreground'>
              I&apos;m currently focused on mastering my skills in Express, React, Node.js, Next.js, Tailwind CSS, Python, TypeScript, and relational databases such as SQL Server and NoSQL like MongoDB and Firestore.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button text-center'>
                {" "}
                Contact Me
                </a>
                <a href="/CV/CristianSolanoResume.pdf" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300 text-center' download target="_blank">
                {" "}
                Download my CV
                </a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>  
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Developer</h4>
                  <p className='text-muted-foreground'>Building responsive and accessible web applications.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>UX/UI Designer</h4>
                  <p className='text-muted-foreground'>Creating user-centered designs for web applications.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Project Management</h4>
                  <p className='text-muted-foreground'>Overseeing projects from conception to completion.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
