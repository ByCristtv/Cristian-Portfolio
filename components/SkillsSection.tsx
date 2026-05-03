'use client'
import React from 'react'
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

const skills = [
  // Frontend
  { name: 'JavaScript', category: 'Frontend', icon: "devicon:javascript" },
  { name: 'TypeScript', category: 'Frontend', icon: "devicon:typescript" },
  { name: 'React',  category: 'Frontend', icon: "devicon:react" },
  { name: 'Next.js',  category: 'Frontend', icon: "devicon:nextjs" },
  { name: 'Tailwind CSS',  category: 'Frontend', icon: "logos:tailwindcss-icon" },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: "devicon:nodejs" },
  { name: 'Express', category: 'Backend', icon: "simple-icons:express" },
  { name: 'PostgreSQL', category: 'Backend', icon: "devicon:postgresql" },
  { name: 'SQL Server', category: 'Backend', icon: "devicon:microsoftsqlserver" },
  { name: 'Python', category: 'Backend', icon: "devicon:python" },
  { name: 'FastAPI', category: 'Backend', icon: "simple-icons:fastapi" },
  { name: 'C#', category: 'Backend', icon: "devicon:csharp" },
  { name: '.NET', category: 'Backend', icon: "skill-icons:dotnet" },

  // AI / Automation 
  { name: 'AI Integration', category: 'AI', icon: "simple-icons:openai" },
  { name: 'LLM Agents', category: 'AI', icon: "mdi:robot-outline" },
  { name: 'Automation Systems', category: 'AI', icon: "mdi:cog-sync-outline" },

  // Tools
  { name: 'Git/GitHub', category: 'Tools', icon: "devicon:git" },
  { name: 'Docker', category: 'Tools', icon: "devicon:docker" },
  { name: 'CI/CD', category: 'Tools', icon: "logos:github-actions" },
  { name: 'Jest', category: 'Tools', icon: "skill-icons:jest" },
  { name: 'AWS', category: 'Tools', icon: "skill-icons:aws-dark" },
];

const categories = ['All', 'Frontend', 'Backend', 'AI', 'Tools'];
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
              <div key={key} className='group bg-card p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
                <div className='flex items-center space-x-4 mb-4'>
                  <Icon
                    icon={skill.icon}
                    className="text-4xl text-primary/80 group-hover:text-primary transition-colors"
                  />
                </div>
                <div className='text-left mb-4'>
                  <h3 className='font-semibold text-lg'>{skill.name}</h3> 
                </div>                           
              </div>
            ))}

          </div>

        </div>
    </section> 
  )
}
