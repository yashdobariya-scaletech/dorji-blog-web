'use client';
import LightHeader from '@/components/header';
import { API_CONFIG, HttpService } from '@/services/http.service';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ArticlesDetails = () => {
	const [articlesDetails, setArticlesDetails] = useState({} as any);
	const { id } = useParams();
	useEffect(() => {
		getArticlesDetails();
	}, []);

	const getArticlesDetails = () => {
		HttpService.get(`${API_CONFIG.path.articles}/${id}?populate=*`)
			.then((response: any) => {
				setArticlesDetails(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<>
			{/* <LightHeader /> */}
			<div className="p--20 mt-165 mt-60">
				{articlesDetails && (
					<div
						className="ck-content"
						dangerouslySetInnerHTML={{
							__html: articlesDetails.attributes?.description
						}}
					/>
				)}
			</div>
		</>
	);
};

export default ArticlesDetails;
