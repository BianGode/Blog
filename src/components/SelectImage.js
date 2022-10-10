import React from 'react'


export default function SelectImage(props) {

	const previewCard = document.querySelector('.preview-image')
	const cardHead = document.querySelector('.cardHead')

	function setHeaderImage(e) {
		var file = e.target.files[0];
		props.setImage(file)
    var reader = new FileReader();
    reader.onloadend = function(){
				// props.setImage(reader.result)
        cardHead.style.backgroundImage = "url(" + reader.result + ")";
				previewCard.style.backgroundImage = "url(" + reader.result + ")";
        // document.getElementById('unselect-image').style.display = "inline";
    }
    if(file){
        reader.readAsDataURL(file);
    }
	}

	return (
		<div className='selectImage'>
			<label htmlFor='img-input'>
			</label>
			<input id='img-input' type="file" accept="image/*" onChange={setHeaderImage} />
		</div>
	)
}
