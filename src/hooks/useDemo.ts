import { useState, useCallback, useRef } from 'react'

export type DemoStep = 0 | 1 | 2 | 3 | 4

export interface TooltipState {
  show: boolean
  text: string
  position: 'top' | 'left'
  element?: HTMLElement | null
}

export const useDemo = () => {
  const [demoStep, setDemoStep] = useState<DemoStep>(0)
  const [tooltip, setTooltip] = useState<TooltipState>({
    show: false,
    text: '',
    position: 'top'
  })
  
  const tooltipRef = useRef<HTMLDivElement>(null)

  const showTooltip = useCallback((element: HTMLElement, text: string, position: 'top' | 'left' = 'top') => {
    if (!tooltipRef.current) return
    
    const rect = element.getBoundingClientRect()
    const tooltip = tooltipRef.current
    
    setTooltip({
      show: true,
      text,
      position,
      element
    })
    
    tooltip.classList.add('show')
    tooltip.classList.remove('tooltip-left', 'tooltip-top')
    
    if (position === 'top') {
      tooltip.style.left = rect.left + rect.width / 2 - 140 + 'px'
      tooltip.style.top = rect.top - 70 + 'px'
      tooltip.classList.add('tooltip-top')
    } else if (position === 'left') {
      tooltip.style.left = rect.left - 300 + 'px'
      tooltip.style.top = rect.top + rect.height / 2 - 30 + 'px'
      tooltip.classList.add('tooltip-left')
    }
  }, [])

  const hideTooltip = useCallback(() => {
    if (tooltipRef.current) {
      tooltipRef.current.classList.remove('show')
    }
    setTooltip(prev => ({ ...prev, show: false }))
  }, [])

  const removeAllHighlights = useCallback(() => {
    document.querySelectorAll('.highlight-ring').forEach(el => {
      el.classList.remove('highlight-ring')
    })
  }, [])

  const updateStepIndicators = useCallback((currentStep: DemoStep) => {
    for (let step = 1; step <= 4; step++) {
      const stepElement = document.getElementById(`step-${step}`)
      if (!stepElement) continue
      
      if (step < currentStep) {
        stepElement.classList.add('completed')
        stepElement.classList.remove('active')
      } else if (step === currentStep) {
        stepElement.classList.add('active')
        stepElement.classList.remove('completed')
      } else {
        stepElement.classList.remove('active', 'completed')
      }
    }
  }, [])

  const resetDemo = useCallback(() => {
    setDemoStep(0)
    removeAllHighlights()
    hideTooltip()
    updateStepIndicators(0)
  }, [removeAllHighlights, hideTooltip, updateStepIndicators])

  const startDemo = useCallback(() => {
    setDemoStep(1)
    updateStepIndicators(1)
  }, [updateStepIndicators])

  const nextStep = useCallback(() => {
    if (demoStep < 4) {
      const newStep = (demoStep + 1) as DemoStep
      setDemoStep(newStep)
      removeAllHighlights()
      updateStepIndicators(newStep)
    }
  }, [demoStep, removeAllHighlights, updateStepIndicators])

  const completeDemo = useCallback(() => {
    removeAllHighlights()
    hideTooltip()
    updateStepIndicators(5 as DemoStep)
  }, [removeAllHighlights, hideTooltip, updateStepIndicators])

  return {
    demoStep,
    tooltip,
    tooltipRef,
    showTooltip,
    hideTooltip,
    removeAllHighlights,
    updateStepIndicators,
    resetDemo,
    startDemo,
    nextStep,
    completeDemo,
    setDemoStep
  }
}