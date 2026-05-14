'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';

export function Header() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{ label: 'Segmenten', href: '/segmenten' },
		{ label: 'Assortiment', href: '/assortiment' },
		{ label: 'Schappenplan', href: '/schappenplan' },
		{ label: 'Over ons', href: '/over-ons' },
		{ label: 'FAQ', href: '/faq' },
		{ label: 'Contact', href: '/contact' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<>
			<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur-lg">
				<nav className="flex h-14 w-full max-w-5xl mx-auto items-center justify-between px-4">
					{/* Logo */}
					<Link
						href="/"
						className="relative h-[50px] w-[200px] shrink-0"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						<Image
							src="/Steelies_logo_pantone.png"
							alt="Steelies Ultimate"
							fill
							className="object-contain"
							priority
						/>
					</Link>

					{/* Desktop nav */}
					<div className="hidden items-center gap-2 md:flex">
						{links.map((link, i) => (
							<a
								key={i}
								className={buttonVariants({ variant: 'ghost', className: 'rounded-full' })}
								href={link.href}
							>
								{link.label}
							</a>
						))}
					</div>

					{/* Mobile toggle */}
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="md:hidden flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background"
						aria-label="Menu openen"
					>
						<MenuToggleIcon open={open} className="size-5" duration={300} />
					</button>
				</nav>
			</header>

			{/* Mobile menu overlay — buiten <header> om backdrop-filter stacking context te vermijden */}
			{open && (
				<div className="fixed inset-0 top-14 z-50 bg-white flex flex-col p-6 gap-3 md:hidden">
					{links.filter(link => link.label !== 'Assortiment').map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={() => setOpen(false)}
							className="text-lg font-medium text-steelies-dark hover:text-[#00C8E8] transition-colors py-2 border-b border-gray-100"
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</>
	);
}
