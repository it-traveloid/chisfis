import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './SearchHeader.module.scss';
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

// import axios from 'axios';
// import { apiUrl } from '../../../utils/apiUrl';
import OutsideClickHandler from 'react-outside-click-handler';
// import { useNavigate } from 'react-router';

const SearchHeader = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [showMenu, setShowMenu] = useState(false);
	
	
	
	const { register, handleSubmit, setValue, formState: { errors } } = useForm({
		
	})
	
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (searchTerm) {
				/*  axios.get(apiUrl('search'), { params: { search: searchTerm } }).then((res) => {
					let result = res.data;
					setSearchResult(result);
				}); */
				if (searchTerm.length < 2) alert('Длина должна быть больше 2 символов!')
				else 
				fetch('/api/categories?search='+searchTerm)
				.then(response => response.json())
				.then((data) => {
					console.log(data.data)  
					setSearchResult(data.data)  
				} );	
				
				console.log(searchTerm)
				} else {
				setSearchResult(null);
			}
		}, 500);
		
		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);
	// const navigate = useNavigate();
	return (
		<div className={styles.wrap}>
		<div className={clsx(styles.wrapInput)}>
        <input
		onFocus={() => {
            setShowMenu(true);
		}}
		onClick={() => {
            setShowMenu(true);
		}}
		{...register("category")} 
		type="text"
		className={clsx(styles.input)}
		placeholder="Поиск по категориям"
		onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn" onClick={() => {
			setValue("category", '');		
			setSearchResult([])  
			
		}}>Очистить</button>
		
		</div>
		{showMenu && searchResult && (
			<OutsideClickHandler
			onOutsideClick={() => {
				setShowMenu(false);
			}}>
			<div className={clsx(styles.menu)}>
            {searchResult?.length >= 1 ? (
				searchResult?.map((item) => (
					<button
					onClick={() => {
						// Тут навагация на страницу
						console.log(item)
						setValue("category", item.name);
						setShowMenu(false);
						
					}}
					title={item?.name}
					className={clsx(styles.menuLink)}>
					{`${item?.name}`}
					</button>
				))
				) : (
				<div class={styles.notFound}>Ничего не найдено</div>
			)}
			</div>
			</OutsideClickHandler>
		)}
		</div>
	);
};

export default SearchHeader;