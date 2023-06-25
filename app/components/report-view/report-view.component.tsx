'use client'

import { useEffect } from 'react'
import { ReportViewProps } from './report-view.type'

export function ReportView({ slug }: ReportViewProps) {
  useEffect(() => {
    fetch('/api/incr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    })
  }, [slug])

  return null
}
