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
						testurl: `${process.env.NEXT_PUBLIC_API_KEY}/uploads/89925310_101517338155992_4043084772807802880_n_b2b9233e60.webp`
					}
				}
			}
		}
	}
];
