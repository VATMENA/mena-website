"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import React from 'react'

function Progress() {
  return (
      <ProgressBar
          height="2px"
          color="#f18f01"
          options={{ showSpinner: false }}
          shallowRouting
      />
  )
}

export default Progress