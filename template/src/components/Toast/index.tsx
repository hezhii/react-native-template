import React from 'react'
import Portal from '../Portal'
import ToastContainer, { ToastType } from './Container'

interface Options {
  type: ToastType
  title: string
  content?: string
  duration?: number
  mask?: boolean
}

function notice(options: Options) {
  const key = Portal.add(
    <ToastContainer {...options} onAnimationEnd={() => Portal.remove(key)} />,
  )
  return key
}

export default {
  show(title: string, content?: string, duration?: number, mask?: boolean) {
    return notice({
      type: 'info',
      title,
      content,
      duration,
      mask,
    })
  },
  fail(title: string, content?: string, duration?: number, mask?: boolean) {
    return notice({
      type: 'fail',
      title,
      content,
      duration,
      mask,
    })
  },
  loading(title: string = 'Loading') {
    return notice({
      type: 'loading',
      title,
      duration: -1,
      mask: true,
    })
  },
}
