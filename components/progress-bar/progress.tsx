"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import React from 'react'

function Progress() {
  return (
      <ProgressBar
          height="2px"
          color="#DD540C"
          options={{ showSpinner: false }}
          shallowRouting
      />
  )
}

export default Progress