import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		"./your-dynamic-content-source/**/*.html"
	],
	"safelist": [
		"flex", "items-center", "gap-2", "px-4", "py-2", "bg-blue-600", "text-white", "font-semibold", "rounded-lg", "shadow-md", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "w-5", "h-5", "border-2", "border-white", "border-t-transparent", "rounded-full", "animate-spin", "bg-green-600", "hover:bg-green-700", "focus:ring-green-500", "flex", "gap-1", "w-2", "h-2", "bg-white", "rounded-full", "animate-bounce", "delay-150", "delay-300", "transition-all", "duration-300", "bg-transparent", "border-green-600", "hover:bg-green-600", "hover:text-white", "hover:shadow-lg", "focus:ring-green-500", "bg-red-700", "hover:bg-red-800", "focus:ring-red-500", "text-green-600", "border-red-700", "hover:bg-red-700", "hover:text-white", "hover:shadow-lg", "focus:ring-red-500"
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			"animation": {
				shimmer: "shimmer 2s linear infinite"
			},
			"keyframes": {
				shimmer: {
					from: {
						"backgroundPosition": "0 0"
					},
					to: {
						"backgroundPosition": "-200% 0"
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

