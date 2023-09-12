import { cn } from "@/lib/utils"
import React from 'react'

function Header({ imageUrl, children, fullscreen }: { imageUrl?: string, children: React.ReactNode, fullscreen?: boolean }) {

    const backgroundStyling = imageUrl ? { backgroundImage: `url(${imageUrl})` } : { backgroundColor: "--foreground" }

    return (
        <>
            <div className={cn("bg-cover bg-no-repeat mb-6", fullscreen ? "h-screen" : "h-80")} style={backgroundStyling}>
                <div className="bg-[rgba(0,0,0,0.70)] h-full">
                    <div className="h-full container mx-auto flex flex-col justify-center">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header