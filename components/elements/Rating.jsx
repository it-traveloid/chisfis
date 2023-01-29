import React from 'react';

const Rating = ({med} ) => (
    <span className="ps-rating">
        {med>=1 ? (<i className="fa fa-star"></i>):(<i className="fa fa-star-o"></i>) }
        {med>=2 ? (<i className="fa fa-star"></i>):(<i className="fa fa-star-o"></i>) }
        {med>=3 ? (<i className="fa fa-star"></i>):(<i className="fa fa-star-o"></i>) }
        {med>=4 ? (<i className="fa fa-star"></i>):(<i className="fa fa-star-o"></i>) }
        {med>=5 ? (<i className="fa fa-star"></i>):(<i className="fa fa-star-o"></i>) }
    </span>
);

export default Rating;