export const languages = {
	es: 'Español',
	en: 'English',
} as const;

export const defaultLocale = 'es' as const;
export type Locale = keyof typeof languages;

export const ui = {
	es: {
		navigation: {
			profile: 'Perfil',
			projects: 'Proyectos',
		},
		labels: {
			about: 'Sobre mí',
			experience: 'Experiencia',
			technologies: 'Tecnologías',
			contact: 'Contacto',
			projects: 'Proyectos seleccionados',
			projectsIntro: 'Una selección de productos, experimentos y experiencias interactivas.',
		},
		actions: {
			contact: 'Contactar',
			downloadCv: 'Descargar CV',
			backToProfile: 'Volver al perfil',
			viewProject: 'Ver proyectos',
			viewRepository: 'Ver repositorio',
			viewDeployment: 'Ver deploy',
		},
	},
	en: {
		navigation: {
			profile: 'Profile',
			projects: 'Projects',
		},
		labels: {
			about: 'About me',
			experience: 'Experience',
			technologies: 'Technologies',
			contact: 'Contact',
			projects: 'Selected projects',
			projectsIntro: 'A selection of products, experiments, and interactive experiences.',
		},
		actions: {
			contact: 'Get in touch',
			downloadCv: 'Download CV',
			backToProfile: 'Back to profile',
			viewProject: 'View projects',
			viewRepository: 'View repository',
			viewDeployment: 'View deploy',
		},
	},
} as const;
