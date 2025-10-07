import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor of Computer Science',	
		description: 'Bachelor of Computer Science (Software Engineering), International Islamic University Malaysia (IIUM). Graduated in September 2025. Currently on the Dean\'s List with a CGPA of 3.53.',
		result: 'CGPA 3.53/4.00',
		location: 'Gombak, Selangor, Malaysia',
		logo: Assets.IIUM,
		name: 'Software Engineering',
		organization: 'IIUM',
		period: { from: new Date(2021, 9, 10), to: new Date(2025, 8, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English', 'Data Structure', 'Network Security', 'Software Testing', 'System Architecture and Design']
	},
	{
		degree: 'Foundations of Engineering and Computer Science',
		description: 'Foundations of Engineering and Computer Science, International Islamic University Malaysia (IIUM). Graduated in September 2021. Currently on the Dean\'s List with a CGPA of 3.81.',
		result: 'CGPA 3.81/4.00',
		location: 'Gombak, Selangor, Malaysia',
		logo: Assets.IIUM,
		name: 'Foundations of Engineering and Computer Science',
		organization: 'IIUM',
		period: { from: new Date(2020, 9, 10), to: new Date(2021, 8, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	},
];

const EducationData = { title, items };

export default EducationData;
