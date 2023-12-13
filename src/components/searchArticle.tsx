import { ReactSearchAutocomplete } from 'react-search-autocomplete';

interface Props {
	items: any[];
	handleOnSearch: (e: any) => void;
	handleOnSelect: (e: any) => void;
	formatResult: (e: any) => void;
}

const SearchArticle: React.FC<Props> = (props) => {
	const { items, handleOnSearch, handleOnSelect, formatResult } = props;
	return (
		<div style={{ width: 400 }}>
			<ReactSearchAutocomplete
				items={items}
				onSearch={handleOnSearch}
				onSelect={handleOnSelect}
				formatResult={formatResult}
				// onHover={handleOnHover}
				// onFocus={handleOnFocus}
			/>
		</div>
	);
};

export default SearchArticle;
