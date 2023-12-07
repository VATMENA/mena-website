"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import React from 'react'

function Progress() {
  return (
      <ProgressBar
          height="3px"
          color="#7F1406"
          options={{ showSpinner: false }}
          shallowRouting
      />
  )
}

export default Progress