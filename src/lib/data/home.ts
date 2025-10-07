import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	profilePicture: {
		light: string;
		dark: string;
	};
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName}`,
	description:
		'A software engineer',
	profilePicture: BaseData.profilePicture,
	links: [
		{ label: 'GitHub', href: 'https://github.com/fiekzz', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/fiekzz', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Twitter', href: 'https://twitter.com/fiekzzlala22', icon: 'i-carbon-logo-twitter' },
		{ label: 'Email', href: 'mailto:fikrichuck@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
