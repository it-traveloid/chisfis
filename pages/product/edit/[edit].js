import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import Head from 'next/head';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import 'react-quill/dist/quill.snow.css';
// import axios from 'axios'
import debounce from 'lodash.debounce';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';

import FooterDefault from '~/components/shared/footers/FooterDefault';

export default function ({ data }) {
	let good = JSON.parse(data.goods)

	const breadCrumb = [
		{
			text: 'Главная',
			url: '/',
		},
		{
			text: 'Товары',
			url: '/product',
		},
		{
			text: good?.title,
		},
	];


	// const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const modules = {
		toolbar: [
			[{ 'header': [1, 2, 3, 4, 5, false] }],
			['bold', 'italic', 'underline'],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
			[{ 'color': [] }, { 'background': [] }], [{ 'font': [] }],
			[{ 'align': [] }],
			['link', 'image', 'video'],
			['clean']
		],
	}
	// const categories = data.categories	
	// setValue("categories", data.categories);	
	const [categories, setCategories] = useState(data.categories);

	const parent = data.parent
	const { register, control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
		defaultValues: {
			props: good?.properties, //[{ property: "Характеристика", value: "Значение" }]
			is_active: good?.is_active
		}
	})

	// if(parent) setValue("parent", parent.id);
	const { data: session } = useSession()
	const router = useRouter()


	const { fields, append } = useFieldArray(
		{
			control,
			name: "props"
		}
	)

	const onSubmit = async (data) => {
		const options = {
			method: 'POST',
			headers: {

				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}

		const response = fetch('/api/catalog', options)
			.then(() => { router.push('/product/') })

	}


	const onEditorStateChange = (editorState) => {
		setValue("description", editorState);
	}


	var options = [
		{ value: '1 блок', label: '1 блок' },
		{ value: '2 блок', label: '2 блок' },
		{ value: '3 блок', label: '3 блок' },
		{ value: '4 блок', label: '4 блок' },
	]

	var categoriesArr = []

	function parentChange(val) {
		console.log(val)
		//setValue("parent", val.value);
		if (val.value < 2) alert('Длина должна быть больше 2 символов!')

		else fetch('/api/categories?search=' + val.value)
			.then(response => response.json())
			.then((data) => {
				//console.log(data.data)   
				setCategories(data.data);

				//return(data.data)  
			});
	}

	function hideChange(val) {
		console.log(val)
		//setValue("hide", val.checked);
	}

	function categoriesChange(val) {
		const arr = JSON.stringify(val)
		console.log(arr);
		setValue("categories", arr);
	}

	const getOptions = (input, callback) => {
		setTimeout(() => {
			callback(null, {
				options: [
					{ value: '0', label: 'One' },
					{ value: '1', label: 'Two' }
				],
				// CAREFUL! Only set this to true when there are no more options,
				// or more specific queries will not be sent to the server.
				complete: true
			});
		}, 500);
	};

	function loadOptions(string) {
		// return ['Каталог']
		// return [{value:0, label: 'Каталог'}]
		if (string.length < 2) alert('Длина должна быть больше 2 символов!')

		else fetch('/api/categories?search=' + string)
			.then(response => response.json())
			.then((data) => {
				console.log(data.data)
				return (data.data)
			});

	}

	if (!session) {
		return (
			<>
				<PageContainer footer={<FooterDefault />} title="Вход">
					<BreadCrumb breacrumb={breadCrumb} />
					<div className="ps-page--my-account">
						<div className="container">
							<form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
								<input type="hidden" {...register("id")} defaultValue={good ? good['id'] : ''} />
								<label className="ps-form__input" htmlFor="title">
									Название
									<br />
									<input class="form-control" style={{ width: '100%' }} type="text" {...register("title")} defaultValue={good ? good['title'] : ''} id="title" />
								</label>
								<br />

								<label className="ps-form__input" htmlFor="categories">
									Родительская категория
									<br />
									<AsyncSelect
										//onChange={debounce(parentChange,500) }
										defaultValue={parent ? { value: parent.id, label: parent?.name } : { value: 0, label: 'Каталог' }}
										loadOptions={getOptions}
										options={categories}
										id="categories"
									/>
								</label>

								{
									/* 
										<Select
										defaultValue={good?{value: good['parent'], label: parent.title}:{value:0, label: 'Каталог'} }
										
										
										placeholder="Категория..."
										
									/> */
								}
								<label htmlFor="is_active">
									Активна <input type="checkbox" {...register("is_active")} id="is_active" />
								</label>

								<label htmlFor="price">
									Цена <input min="0" step="0.01" type="number" {...register("price")} defaultValue={good ? good['price'] : 0} id="price" />
								</label>

								<label htmlFor="sale_price">
									Цена со скидкой <input min="0" step="0.01" type="number" {...register("sale_price")} defaultValue={good ? good['sale_price'] : '0'} id="sale_price" />
								</label>

								<br />

								<label>
									Размещение на главной
									<Select
										//defaultValue={good?good['categories']:'1 блок'}JSON.parse(json);

										defaultValue={good ? JSON.parse(good['categories']) : []}
										// defaultValue={[{ value: '1 блок', label: '1 блок'  } ] }
										options={options}
										isMulti
										placeholder="Блок на главной..."
										onChange={categoriesChange}
									/>
								</label>

								<br />


								Картинки:<br />
								{good?.images.map((item, index) =>
									(<Image key={index} src={"/static" + item.url} alt={good.name} width={200} height={200} />)

								)}
								<input style={{ width: '100%' }} type="file" multiple {...register("preview")} /><br />

								<div>
									Свойства и характеристики:<br />
									<button
										type="button"
										onClick={() => {
											append({ property: "Свойство", value: "Значение" });
										}}
									>
										Добавить
									</button>
								</div>

								<ul>
									{fields.map((item, index) => {

										return (
											<li key={item.id}>
												<input
													name={`props[${index}].property`}
													defaultValue={`${item.property}`} // make sure to set up defaultValue
													//  onChange={itemChange}
													{...register(`props.${index}.property`)}

												/>
												<input
													name={`props[${index}].value`}
													defaultValue={`${item.value}`} // make sure to set up defaultValue
													{...register(`props.${index}.value`)}
												/>
												<button type="button" onClick={() => remove(index)}>
													Удалить
												</button>


											</li>
										);
									})}
								</ul>
								<br />

								<label>
									Описание
									<ReactQuill modules={modules} defaultValue={good ? good['description'] : ''} onChange={onEditorStateChange} />
								</label>

								<br />
								<button type="submit">Сохранить</button>
							</form>
						</div>
					</div>
				</PageContainer>
			</>
		)
	}

	if (!good) return (
		<PageContainer footer={<FooterDefault />}>
			<div className="container">Товар не найден</div>
		</PageContainer>
	);

	// если товар существует - отрисовать его
	return (
		<div>


			title: {good['title']} <br />
			description: {good['description']}
		</div>


	)



}

export async function getServerSideProps(context) {
	const { params } = context;
	let prisma
	if (!global.prisma) {
		global.prisma = new PrismaClient()
	}

	prisma = global.prisma

	//try {
	const good = await prisma.products.findFirst({
		/* select: {
			id: true,
			name: true,
			parent: true,
			slug: true,
			description: true,
			preview: true,
			categories: true,
			price: true,
			discount: true,
			properties: true,
			images: true,
			hide: true,
			
		}, */
		where: {
			slug: params.edit,
		},
		include: { properties: true, images: true }
	})

	let parent = null
	if (good)
		parent = await prisma.categories.findFirst({
			select: {
				id: true,
				name: true,

			},
			where: {
				id: good.parent,
			},

		})


	const categories = await prisma.products.findMany({
		select: {
			id: true,
			title: true,

		},
		where: {
			sale_price: 0,
			is_active: true,
		},

	})

	let categoriesArr = [{ value: 0, label: 'Каталог' }]
	if (parent) categoriesArr.push({ value: parent.id, label: parent.name })
	categories.forEach((category, index) => {
		categoriesArr.push({ label: category.name, value: category.id })
	})
	const json = JSON.stringify(good)

	const data = {
		"goods": json,
		"categories": categoriesArr,
		"parent": parent,

	}
	console.log(data)

	return {
		props: {
			data
		},
	};
	//} 
}
