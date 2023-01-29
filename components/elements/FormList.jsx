import React from 'react';

const FormList = ({ title, params, noListStyle }) => {
    const renderTitle = () => {
        if (!title) return <></>;

        return <div className="form-list-title">{title}</div>
    }

    const renderParams = () => {
        if (!params?.length || !params) return <></>;

        return (
            <ul className="form-list-ul">
                {
                    params.map((param, index) =>
                        <li key={index} className="form-list-li" dangerouslySetInnerHTML={{ __html: param }}></li>
                    )
                }
            </ul >
        )
    }

    return (
        <div className={'form-list' + (noListStyle ? ' no-list-style' : '')}>
            {renderTitle()}
            {renderParams()}
        </div>
    )
};

export default FormList;