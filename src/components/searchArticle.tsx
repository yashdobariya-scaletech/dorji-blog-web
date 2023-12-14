import Image from 'next/image';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

interface Props {
	items: any[];
	isScrolled: boolean;
	handleOnSearch: (e: any) => void;
	handleOnSelect: (e: any) => void;
	// formatResult: (e: any) => void;
}

const SearchArticle: React.FC<Props> = (props) => {
	const { isScrolled, items, handleOnSearch, handleOnSelect } = props;
	const styling = isScrolled
		? {
				backgroundColor: '0F1A2E',
				color: '#0F1A2E',
				height: '38px',
				hoverBackgroundColor: '#ffffff2e',
				iconColor: '#0F1A2E',
				border: 'none',
				borderRadius: '15px',
				boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.05)'
		  }
		: {
				backgroundColor: '#fff',
				color: '#FFFFFF',
				height: '38px',
				hoverBackgroundColor: '#ffffff2e',
				iconColor: '#FFFFFF',
				border: 'none',
				borderRadius: '15px',
				boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.05)'
		  };
	return (
		// <div style={{ width: 400 }}>
		// <ReactSearchAutocomplete
		// 	// styling={{ color: 'green', backgroundColor: 'transparent', width: '100%' }}
		// 	items={items}
		// 	placeholder="Search"
		// 	onSearch={handleOnSearch}
		// 	onSelect={handleOnSelect}
		// 	// formatResult={formatResult}
		// 	// onHover={handleOnHover}
		// 	// onFocus={handleOnFocus}
		// />
		// // </div>
		<div style={{ width: 400, height: 38 }}>
			<ReactSearchAutocomplete
				items={items}
				placeholder="Search"
				onSearch={handleOnSearch}
				onSelect={handleOnSelect}
				formatResult={(item: any) => {
					return (
						<>
							<div key={item.id} className="d-flex cursor-pointer">
								<div className="w-[50] h-[50]">
									<Image
										width={50}
										height={50}
										src={item.img}
										style={{
											width: '50px',
											height: '50px',
											objectFit: 'cover'
										}}
										alt="Culture"
									/>
								</div>
								<p className="ml-20"> {item.name}</p>
							</div>
						</>
					);
				}}
				styling={styling}
				className=""
				// onHover={handleOnHover}
				// onFocus={handleOnFocus}
			/>
		</div>
	);
};

export default SearchArticle;
