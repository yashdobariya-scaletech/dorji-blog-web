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
						url: `/uploads/cropped_yyyyy_9bed6258c8.jpg`
					}
				}
			}
		}
	}
];
