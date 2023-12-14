import moment from 'moment';

export const formatDate = (date: any, format?: string) => {
	if (!date) {
		return '';
	}
	return moment(date)
		.local()
		.format(format || 'MMM Do YYYY');
};

export const featuredBlogData = [
	{
		id: 1,
		attributes: {
			title: 'Mann ki Baat',
			previewImage: {
				data: {
					attributes: {
						testurl: 'http://192.168.1.97:1337/uploads/89925310_101517338155992_4043084772807802880_n_b2b9233e60.webp'
					}
				}
			}
		}
	}
];
