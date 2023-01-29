import {useEffect, useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {Spin} from 'antd';
import ProductSearchResult from '~/components/elements/products/ProductSearchResult';
import useCategoriesAPI from "~/hooks/useCategoriesAPI";
import UseGetAllCategories from "~/hooks/useGetAllCategories";

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

const SearchHeader = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const {loading, error, count, categories, getCategories} = useCategoriesAPI();
    const [resultItems, setResultItems] = useState(null);
    const debouncedSearchTerm = useDebounce(keyword, 300);

    UseGetAllCategories({getCategories});

    const handleClearKeyword = () => {
        setKeyword('');
        setIsSearch(false);
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (keyword.search(/^\s+$/)) {
            let url;

            if (selectedCategory) {
                url = `/search?keyword=${keyword}&category=${selectedCategory}`;
            } else {
                url = `/search?keyword=${keyword}`;
            }

            Router.push(url);
        }
    }

    const handleSearch = (newValue) => {
        if (newValue.search(/^\s+$/)) {
            setKeyword(newValue);
        }
    };

    const handleCategory = (newValue) => {
        setSelectedCategory(newValue);
    }

    // Views
    let productItemsView,
        clearTextView,
        selectOptionView,
        loadingView,
        loadMoreView;
    if (!loading) {
        if (resultItems && resultItems.length > 0) {
            if (resultItems.length > 5) {
                loadMoreView = (
                    <div className="ps-panel__footer text-center">
                        <Link href="/search">
                            <a>Все результаты</a>
                        </Link>
                    </div>
                );
            }
            productItemsView = resultItems.map((product) => (
                <ProductSearchResult product={product} key={product.id}/>
            ));
        } else {
            productItemsView = <p>Товар не найден</p>;
        }
        if (keyword !== '') {
            clearTextView = (
                <span className="ps-form__action" onClick={handleClearKeyword}>
                    <i className="icon icon-cross2"></i>
                </span>
            );
        }
    } else {
        loadingView = (
            <span className="ps-form__action">
                <Spin size="small"/>
            </span>
        );
    }

    return (
        <form
            className="ps-form--quick-search"
            method="get"
            action="/"
            onSubmit={handleSubmit}>
            <div className="ps-form__categories">
                <select
                    className="form-control"
                    onChange={(e) => handleCategory(e.target.value)}
                    value={selectedCategory}
                >
                    <option value="">
                        Все категории
                    </option>

                    {categories.map(category =>
                        <option value={category?.id} key={category?.id}>
                            {category?.name}
                        </option>
                    )}
                </select>
            </div>
            <div className="ps-form__input">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Найти товары..."
                    value={keyword}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                {clearTextView}
                {loadingView}
            </div>
            <button onClick={handleSubmit}>Поиск</button>
            <div
                className={`ps-panel--search-result${
                    isSearch ? ' active ' : ''
                }`}>
                <div className="ps-panel__content">{productItemsView}</div>
                {loadMoreView}
            </div>
        </form>
    );
};

export default SearchHeader;
