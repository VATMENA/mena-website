import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                "orange": "#F18F01",
                "twitter": "#1DA1F2",
                "discord": "#5865F2"
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mena: {
                    "primary": "#f18f01",
                    "secondary": "#0163f1",
                    "accent": "#1fb2a6",
                    "neutral": "#2a323c",
                    "base-100": "#1d232a",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
        ],
    },
}
export default config
