import React from 'react';
import PartialReview from '~/components/elements/detail/description/PartialReview';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const DescriptionFullContent = ({product}) => {
	
    const onFinish = async (values) => {
		// console.log('Success:', values);
		const responseData= await axios.post('/api/question',values )
		alert('Ваш вопрос отправлен!')
	};
	
	
    return (
		
		
		
		<div className="ps-product__content">
		<h3 className="ps-product__heading">Описание</h3>
		<div className="ps-document"  dangerouslySetInnerHTML={{__html: product.description}}>
		
		</div>
		<h3 className="ps-product__heading">Спецификация</h3>
		<div className="table-responsive">
		<table className="table table-bordered ps-table ps-table--specification">
		<tbody>
		
		{product.properties.map((item, index) => { return (
			<tr key={item.id}>
			<td>{item.property}</td>
			<td>{item.value}</td>
			</tr>
		)
		})
		}
		
		
		</tbody>
		</table>
		</div>
		<h3 className="ps-product__heading">Производитель</h3>
		<h4>{product.vendor}</h4>
		<p>
		Описание поставщика
		</p>
		<a href="#">Другие товары от {product.vendor}</a>
		<PartialReview product={product}/>
		
		<h3 className="ps-product__heading">Вопросы и ответы</h3>
		<div className="ps-block--questions-answers">
		<h3>Вопросы и ответы</h3>
		<div className="form-group">
		
		<Form
		name="basic"
		onFinish={onFinish}
		autoComplete="off"
		>
		<Form.Item
		label=""
		name="question"
		rules={[{ required: true, message: 'Введите свой вопрос!' }]}
		>
		<Input
		className="form-control"
		type="text"
		placeholder="Напишите ваш вопрос, мы ответим на него"
		/>
		</Form.Item> 
		<Button type="primary" htmlType="submit">
        Отправить
		</Button>
		</Form>
		</div>
		</div>
		<h3 className="ps-product__heading">Больше предложений</h3>
		<p>Извините, других предложений нет</p>
		</div>
	);
}

export default DescriptionFullContent;
