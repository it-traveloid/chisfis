import React from 'react';
import { Rate } from 'antd';
import Rating from '@/components/elements/Rating';
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react"

const PartialReview = ({product}) => {
	let r1=0,r2=0,r3=0,r4=0,r5=0,sum=0
	let r1percent=0,r2percent=0,r3percent=0,r4percent=0,r5percent=0,med=0
	const count=parseInt(product.rating.length)
	if(count>0){
	for (const rating of product.rating){
		if(rating.value==5) r5+=1
		if(rating.value==4) r4+=1
		if(rating.value==3) r3+=1
		if(rating.value==2) r2+=1
		if(rating.value==1) r1+=1
		sum+=rating.value
	}
	med=(parseInt(sum)/parseInt(count)).toFixed(2)
	
	r1percent=(r1*100/count).toFixed(2)
	r2percent=(r2*100/count).toFixed(2)
	r3percent=(r3*100/count).toFixed(2)
	r4percent=(r4*100/count).toFixed(2)
	r5percent=(r5*100/count).toFixed(2)
	}
	const { register, control, handleSubmit, setValue, formState: { errors } } = useForm()
	
	const onRateChange = (state) => {
		setValue("value", state);
	}
	  	const { data: session } = useSession()


	const onSubmit = async (data) => {
	    if(!session) {alert("Голосовать могут только зарегистрированные пользователи!") 
		  return
		}
		data.username=session.name
		data.useremail=session.email.email
		data.productsId=product.id
	    console.log(data)
		const options = {
			method: 'POST',
			headers: {
				
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}
		
		const response = fetch('/api/review', options)			.then(() => { alert('Спасибо за ваш голос!') })
		
	}
	
	
	return (
		<div className="row">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
		<div className="ps-block--average-rating">
		<div className="ps-block__header">
		<h3>{med }</h3>
	<Rating />
	
	<span>{product.rating.length } оценок</span>
	</div>
	<div className="ps-block__star">
	<span>5 Звезд</span>
	<div className="ps-progress" data-value="{r5percent}">
	<span></span>
	</div>
	<span>{r5percent} %</span>
	</div>
	<div className="ps-block__star">
	<span>4 Звезды</span>
	<div className="ps-progress" data-value="{r4percent}">
	<span></span>
	</div>
	<span>{r4percent} %</span>
	</div>
	<div className="ps-block__star">
	<span>3 Звезды</span>
	<div className="ps-progress" data-value="{r3percent}">
	<span></span>
	</div>
	<span>{r3percent} %</span>
	</div>
	<div className="ps-block__star">
	<span>2 Звезды</span>
	<div className="ps-progress" data-value="{r2percent}">
	<span></span>
	</div>
	<span>{r2percent} %</span>
	</div>
	<div className="ps-block__star">
	<span>1 Звезда</span>
	<div className="ps-progress" data-value="{r1percent}">
	<span></span>
	</div>
	<span>{r1percent} %</span>
	</div>
	</div>
	</div>
	<div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
	<form className="ps-form--review" onSubmit={handleSubmit(onSubmit)}>
	<h4>Отправить свой отзыв</h4>
	<p>
	{!session ? (<>Голосовать могут только <a href="/account/register">зарегистрированные</a> пользователи</>):(<></>) }
	
	</p>
	<input type="hidden" {...register("id")} defaultValue={product.id} />
	
	<div className="form-group form-group__rating">
	<label>Ваша оценка этого товара</label>
	<Rate defaultValue={5} onChange={onRateChange}/>
	</div>
	<div className="form-group">
	<textarea
	className="form-control"
	{...register("review")}
	rows="6"
	placeholder="Напишите ваш отзыв"></textarea>
	</div>
	{
	/* <div className="row">
	<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
	<div className="form-group">
	<input
	className="form-control"
	{...register("username")}
	type="text"
	placeholder="Ваше имя"
	/>
	</div>
	</div>
	<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
	<div className="form-group">
	<input
	className="form-control"
	type="email"
	{...register("useremail")}
	placeholder="Ваш адрес электронной почты"
	/>
	</div>
	</div>
	</div> */
	
	}
	<div className="form-group submit">
	<button className="ps-btn" type="submit">Добавить Отзыв</button>
	</div>
	</form>
	</div>
	</div>
);

}

export default PartialReview;
