import React from 'react';

const ModuleProductDetailSharing = () => (

    <div className="ps-product__sharing">
        <a className="facebook" href="#"
		 data-toggle="tooltip"
                    data-placement="top"
                    title="Поделиться ВКонтакте"
		>
            <i className="fa fa-vk"></i>
        </a>
		<a className="linkedin" href="#"
		 data-toggle="tooltip"
                    data-placement="top"
                    title="Поделиться в Одноклассниках"
		>
            <i className="fa fa-odnoklassniki"></i>
        </a>
		<a className="whatsapp" href="#"
		 data-toggle="tooltip"
                    data-placement="top"
                    title="Поделиться в Whatsapp"
		>
            <i className="fa fa-whatsapp"></i>
        </a>
        <a className="telegram" href="#"
		 data-toggle="tooltip"
                    data-placement="top"
                    title="Поделиться в Telegram"
		>
            <i className="fa fa-telegram"></i>
        </a>
        <a className="google" href="#"
		 data-toggle="tooltip"
                    data-placement="top"
                    title="Поделиться в Google+"
		>
            <i className="fa fa-google-plus"></i>
        </a>
        
		{
        /* <a className="instagram" href="#">
            <i className="fa fa-instagram"></i>
        </a> */
		}
    </div>

);

export default ModuleProductDetailSharing;