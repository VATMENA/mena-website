"use client";

import React from 'react'
import { TypeAnimation as TypingAnimation } from 'react-type-animation';

function TypeAnimation({ phrases, delay, startText }: { phrases: string[], delay?: number, startText?: string }) {
    return (
        <div className="blinking-cursor inline">
            {startText}&nbsp;
            <span className="text-primary">
                <TypingAnimation
                    sequence={phrases}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </span>
        </div>
    )
}

export default TypeAnimation