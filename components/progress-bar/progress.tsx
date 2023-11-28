"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import React from 'react'

function Progress() {
  return (
      <ProgressBar
          height="2px"
          color="#33658A"
          options={{ showSpinner: false }}
          shallowRouting
      />
  )
}

export default Progress