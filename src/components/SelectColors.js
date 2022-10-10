import React from 'react'


export default function SelectColors(props) {

	const previewCard = document.querySelector('.card')
	const cardHead = document.querySelector('.cardHead')

	function switchFun(color) {
		previewCard.style.borderColor = color
		cardHead.style.backgroundColor = color
		cardHead.style.borderBottom = '3px solid ' + color
	}

	function setColor(e) {
		switch (e.target.className) {
			case 'black':
				switchFun('#1C1D20')
				document.querySelector('h3').style.color = 'white'
				props.setColor('#1C1D20')
				break;
			case 'green':
				switchFun('#78E18C')
				props.setColor('#78E18C')
				break;
			case 'purple':
				switchFun('#C23DE3')
				props.setColor('#C23DE3')
				break;
			case 'red':
				switchFun('#BD0036')
				props.setColor('#BD0036')
				break;
			case 'yellow':
				switchFun('#F2B900')
				props.setColor('#F2B900')
				break;
		}

	}

	function setHeadTextColor(e) {
		console.log(e.target.value);
		props.setColor(e.target.value)
		switchFun(e.target.value)
	}

	return (
		<div className='colors'>
			<div className='black' onClick={setColor} style={{ backgroundColor: '#1C1D20' }}></div>
			<div className='green' onClick={setColor} style={{ backgroundColor: '#78E18C' }}></div>
			<div className='purple' onClick={setColor} style={{ backgroundColor: '#C23DE3' }}></div>
			<div className='red' onClick={setColor} style={{ backgroundColor: '#BD0036' }}></div>
			<div className='yellow' onClick={setColor} style={{ backgroundColor: '#F2B900' }}></div>
			<div className='colorFontDiv'><input type='color' className='fontColor' onChange={setHeadTextColor}/><p>Custom</p></div>
		</div>
	)
}
