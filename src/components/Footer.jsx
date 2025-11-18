import React from 'react';
import { FacebookIcon, Sparkles, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

const footerLinks = [
	{
		label: 'Services',
		links: [
			{ title: 'AI Chatbots', href: '#services' },
			{ title: 'Machine Learning', href: '#services' },
			{ title: 'NLP Solutions', href: '#services' },
			{ title: 'Computer Vision', href: '#services' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '/about' },
			{ title: 'Our Team', href: '/team' },
			{ title: 'Careers', href: '/careers' },
			{ title: 'Contact', href: '/contact' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Case Studies', href: '/case-studies' },
			{ title: 'Documentation', href: '/docs' },
			{ title: 'API Reference', href: '/api' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-neutral-900/50 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/4%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-neutral-700/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<div className="flex items-center gap-2">
						<Sparkles className="size-8 text-white" strokeWidth={1.5} />
						<span className="text-xl font-semibold text-white">Flowbotic AI</span>
					</div>
					<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
						Transforming businesses with cutting-edge AI solutions. Building the future, one algorithm at a time.
					</p>
					<p className="text-neutral-600 text-xs pt-4">
						© {new Date().getFullYear()} Flowbotic AI. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs font-semibold text-white uppercase tracking-wider">{section.label}</h3>
								<ul className="text-neutral-500 mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-white inline-flex items-center transition-colors duration-200"
											>
												{link.icon && <link.icon className="me-2 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

function AnimatedContainer({ className, delay = 0.1, children }) {
	return <div className={className}>{children}</div>;
}
