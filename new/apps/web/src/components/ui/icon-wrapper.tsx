import { cn } from '@/lib/utils'

interface IconWrapperProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'accent'
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12', 
  lg: 'w-16 h-16',
  xl: 'w-20 h-20'
}

const variantClasses = {
  primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white',
  secondary: 'bg-gradient-to-r from-slate-500 to-slate-600 text-white',
  accent: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
}

export function IconWrapper({ 
  children, 
  size = 'md', 
  variant = 'primary',
  className 
}: IconWrapperProps) {
  return (
    <div className={cn(
      'inline-flex items-center justify-center rounded-full shadow-lg',
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      {children}
    </div>
  )
}
