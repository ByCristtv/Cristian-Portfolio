'use client'
import React from 'react'
import { cn } from '@/lib/utils';
const skills = [
  //FrontEnd
  { name: 'JavaScript', level: 95, category: 'Frontend' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'HTML/CSS', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  //Backend
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Express', level: 80, category: 'Backend' },
  { name: 'NoSQL', level: 90, category: 'Backend' },
  { name: 'PostgreSQL', level: 90, category: 'Backend' },
  { name: 'Python', level: 80, category: 'Backend' },
  { name: 'FastAPI', level: 85, category: 'Backend' },

  //Tools
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
  { name: 'VS Code', level: 95, category: 'Tools' },
  { name: 'Cypress', level: 80, category: 'Tools' },
  { name: 'Jest', level: 85, category: 'Tools' },
]

const categories = ['All', 'Frontend', 'Backend', 'Tools'];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const filteredSkills = skills.filter((skill) => activeCategory === 'All' || skill.category === activeCategory);
  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container max-auto max-w-5xl'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            My <span className='text-primary'>Skills</span>
          </h2>

          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {categories.map((category,key) => (
              <button 
                key={key} 
                className={cn(`px-5 py-2 rounded-full transition-colors duration-300 capitalize`, 
                  activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredSkills.map((skill,key) => (
              <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                <div className='text-left mb-4'>
                  <h3 className='font-semibold text-lg'>{skill.name}</h3> 
                </div>
                <div className='w-full bg-secondary/50 rounded-full h-2 overflow-hidden'>
                  <div className='bg-primary h-2 rounded-full origin-left animate-[grow_width_1.5s_ease-out]'
                    style={{ width: skill.level + '%'}}/>
                  </div>
                  <div className='text-right mt-1'>
                    <span className='text-sm text-muted-foreground'>
                      {skill.level}%
                    </span>
                  </div>
                
              </div>
            ))}

          </div>

        </div>
    </section> 
  )
}
