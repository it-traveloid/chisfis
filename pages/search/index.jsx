import {useEffect, useState} from 'react';
import BreadCrumb from '@/../../components/elements/BreadCrumb';
import PageContainer from '@/../../components/layouts/PageContainer';
import Newsletters from '@/../../components/partials/commons/Newletters';
import {useRouter} from 'next/router';
import useProductsAPI from "@/../../hooks/useProductsAPI";
import Product from "@/../../components/elements/products/Product";
import {generateTempArray} from "@/../../utilities/common-helpers";
import SkeletonProduct from "@/../../components/elements/skeletons/SkeletonProduct";
import {Pagination} from "antd";

const breadcrumb = [{text: 'Домой', url: '/'}, {text: 'Результаты поиска'}];

const SearchPage = () => {
    const {query: {keyword, category}} = useRouter();
    const [skip, setSkip] = useState(0);
    const [take, setTake] = useState(5);
    const [page, setPage] = useState(1);
    const {loading, error, products, count, getProducts} = useProductsAPI();

    useGetProductsKeyword({getProducts, keyword, category, skip, take});

    const handlePagination = (newPage) => {
        setPage(newPage);
        setSkip((newPage - 1) * take);
    };

    return (
        <PageContainer title={`Результаты поиска для: "${keyword}" `}>
            <div className="ps-page">
                <BreadCrumb breacrumb={breadcrumb}/>
            </div>

            <div className="container">
                <div className="ps-shop ps-shop--search">
                    <div className="container">
                        <div className="ps-shop__header">
                            <h1>
                                Результаты поиска для: "<strong>{keyword}</strong>"
                            </h1>
                        </div>
                        <div className="ps-shop__content">
                            {loading ?
                                <div className="row">
                                    {generateTempArray(6).map(skeletonProduct => (
                                        <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={skeletonProduct}>
                                            <SkeletonProduct/>
                                        </div>))}
                                </div>
                                :
                                products && products.length > 0
                                    ?
                                    <div className="row">
                                        {products?.map(product =>
                                            <div className="col-md-3 col-sm-6 col-6" key={product.id}>
                                                <Product product={product}/>
                                            </div>
                                        )}
                                    </div>
                                    :
                                    <p>Товар(ы) не найден(ы).</p>
                            }
                        </div>

                        {count > 0 &&
                            <div className="ps-shopping__footer text-center">
                                <div className="ps-pagination">
                                    <Pagination
                                        total={count}
                                        pageSize={take}
                                        responsive={true}
                                        showSizeChanger={false}
                                        current={page}
                                        onChange={handlePagination}
                                    />
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
            <Newsletters layout="container"/>
        </PageContainer>
    );
};

const useGetProductsKeyword = ({getProducts, keyword, category, skip, take}) => {
    useEffect(() => {``
        if (keyword) {
            getProducts({keyword, category, skip, take});
        }
    }, [keyword, skip, take]);
};

export default SearchPage;