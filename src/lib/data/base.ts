import Assets from "./assets";

const firstName = 'Fikri';
const lastName = 'Hisham';
const suffix = 'Slick Portfolio With Svelte 5';
const username = 'fiekzz';

const BaseData = {
	firstName,
	lastName,
	suffix,
	username,
	get fullName() {
		return `${firstName} ${lastName}`;
	},
	profilePicture: Assets.Fikri
};

export default BaseData;
