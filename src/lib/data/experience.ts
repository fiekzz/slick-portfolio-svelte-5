import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Krypton Technologies',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Open Source Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'ant-international',
		company: 'Ant International',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Mobile Engineer (Internship)',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'quelify-my',
		company: 'Quelify MY',
		description: `
		- Developed a queuing system that integrates with the scheduling system and payment system, BillPlz.
		- Main system analyser before starting development to ensure smoothness, by using the waterfall methodology
		`,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'krypton-technologies',
		company: 'Krypton Technologies',
		description: `
		- Initiated the AG4U project, a comprehensive Kindergarten system that attracted over 1,000 active users within the first month of its November 2023 release, positioning it as a leading educational tool in Kuala Lumpur and Selangor.
		- Implemented rigorous user feedback loops post-launch, leading to the rollout of 3 significant updates that enhanced overall app functionality and improved customer satisfaction scores by 75%, resulting in a more robust user retention rate.
		- Led the team in creating the success of the projects.
		`,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Gombak, Malaysia',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Software Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
