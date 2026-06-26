'use client'

import * as React from 'react'

interface DateRangePickerProps {
  defaultFrom?: string
  defaultTo?: string
  className?: string
}

export function DateRangePicker({ defaultFrom, defaultTo, className }: DateRangePickerProps) {
  const [from, setFrom] = React.useState(defaultFrom ?? '')
  const [to, setTo] = React.useState(defaultTo ?? '')

  return (
    <div className={`flex gap-2 ${className ?? ''}`}>
      <input
        type="hidden"
        name="dateFrom"
        value={from}
      />
      <input
        type="hidden"
        name="dateTo"
        value={to}
      />
      <input
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="From"
        className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary"
      />
      <input
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="To"
        className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary"
      />
    </div>
  )
}
