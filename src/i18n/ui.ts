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
		},
		actions: {
			contact: 'Contactar',
			viewProject: 'Ver proyecto',
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
		},
		actions: {
			contact: 'Get in touch',
			viewProject: 'View project',
			viewRepository: 'View repository',
			viewDeployment: 'View deploy',
		},
	},
} as const;
