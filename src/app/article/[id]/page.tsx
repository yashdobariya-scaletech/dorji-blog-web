'use client';
import { DarkHeader } from '@/components/header';
import { API_CONFIG, HttpService } from '@/services/http.service';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const ArticlesDetails = () => {
	const [articlesDetails, setArticlesDetails] = useState({} as ArticleInfo);
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	useEffect(() => {
		getArticlesDetails();
	}, []);

	const getArticlesDetails = () => {
		setLoading(true);
		HttpService.get(`${API_CONFIG.path.articles}/${id}?populate=*`)
			.then((response: any) => {
				setArticlesDetails(response.data);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	};

	return (
		<>
			<DarkHeader />
			{Object.keys(articlesDetails).length !== 0 && !loading && (
				<div className="d-flex p--20 mt-165 mt-60">
					<div
						className="ck-content"
						dangerouslySetInnerHTML={{
							__html: articlesDetails.attributes?.description
						}}
					/>
				</div>
			)}

			{Object.keys(articlesDetails).length === 0 && !loading && (
				<div className="d-flex p--20 height-612 mt-60 align-items-center">
					<div className="no-data-found  full-width font-size-18 text-align--center">No data found</div>
				</div>
			)}
			{loading && Object.keys(articlesDetails).length === 0 && (
				<div className="p--20 mt-165 align-items-center">
					<Skeleton baseColor="#D4DAE6" className="p-10" />
					<Skeleton baseColor="#D4DAE6" count={12} className="p-10" />
				</div>
			)}
		</>
	);
};

export default ArticlesDetails;
