import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: 'light' | 'dark'
}

export const Logo: React.FC<LogoProps> = ({ className, showText = true, variant = 'light' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary'
  
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative h-12 w-12 flex-shrink-0">
        <Image 
          src="/assets/images/bywin logo.png" 
          alt="BYWI Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn('text-2xl font-black tracking-tight uppercase', textColor)}>
            BYWIN
          </span>
          <span className={cn('text-[10px] font-bold uppercase tracking-wider opacity-90 whitespace-nowrap', textColor)}>
            Brighter Youth and Women Initiative
          </span>
        </div>
      )}
    </div>
  )
}
