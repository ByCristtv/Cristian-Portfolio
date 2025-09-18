import React from 'react'
import { ArrowUp } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="p-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        {" "}
        <p className='text-sm text-muted-foreground'>
            {""}
            © 2025 Cristian Solano. All rights reserved.
        </p>
        <a href="hero" className='p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors'>
            <ArrowUp size={20} />
        </a>
    </footer>
  )
}
