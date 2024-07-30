export type TUser = {
	name: string;
	email: string;
	profilePic: string;
	uid: string;
};

export type TFiles = {
	downloadUrl: string;
	filename: string;
	uid: string;
	type: string;
	id: string;
	size: number;
	timestamp: Date;
};
