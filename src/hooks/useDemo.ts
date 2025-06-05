import { useState, useCallback, useRef } from 'react'

export type DemoStep = 0 | 1 | 2 | 3 | 4

export const useDemo = () => {
  const [demoStep, setDemoStep] = useState<DemoStep>(0)


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
    updateStepIndicators(0)
  }, [removeAllHighlights, updateStepIndicators])

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
    updateStepIndicators(5 as DemoStep)
  }, [removeAllHighlights, updateStepIndicators])

  return {
    demoStep,
    removeAllHighlights,
    updateStepIndicators,
    resetDemo,
    startDemo,
    nextStep,
    completeDemo,
    setDemoStep
  }
}