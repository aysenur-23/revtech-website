import * as React from "react"
import { cn } from "@/lib/utils"

export interface FloatingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  helperText?: string
}

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
    
    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    }
    
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      setHasValue(e.target.value.length > 0)
      props.onBlur?.(e)
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }
    
    const isLabelFloating = isFocused || hasValue
    
    return (
      <div className="relative">
        <div className="relative">
          <textarea
            id={textareaId}
            className={cn(
              "peer w-full border-0 border-b-2 border-slate-300 bg-transparent px-0 py-2 text-slate-900 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
              error && "border-red-500 focus:border-red-500",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={label}
            {...props}
          />
          <label
            htmlFor={textareaId}
            className={cn(
              "absolute left-0 -top-3.5 text-sm text-slate-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-sky-600",
              isLabelFloating && "-top-3.5 text-sm text-sky-600",
              error && "text-red-500 peer-focus:text-red-500"
            )}
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-slate-500">{helperText}</p>
        )}
      </div>
    )
  }
)
FloatingTextarea.displayName = "FloatingTextarea"

export { FloatingTextarea }
