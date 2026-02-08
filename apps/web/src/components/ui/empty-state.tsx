import * as React from "react"
import { cn } from "@/lib/utils"
import { ui } from "@/lib/ui.config"
import { Button } from "./button"

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center",
          ui.spacing.section,
          className
        )}
        {...props}
      >
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            {icon}
          </div>
        )}
        <h3 className={cn(ui.typography.h3, "mb-2")}>{title}</h3>
        {description && (
          <p className={cn(ui.typography.bodySmall, "text-slate-600 mb-6 max-w-sm")}>
            {description}
          </p>
        )}
        {action && (
          <Button onClick={action.onClick}>
            {action.label}
          </Button>
        )}
      </div>
    )
  }
)
EmptyState.displayName = "EmptyState"

export { EmptyState }
