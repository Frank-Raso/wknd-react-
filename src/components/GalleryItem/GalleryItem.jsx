import { useState } from 'react';
import axios from 'axios';



function GalleryItem(props) {
    const [show, setShow] = useState(true);
    function toggleShow() {
        setShow(!show);
    }
    function likePic() {
        axios.put(`/gallery/like/${props.item.id}`).then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
            alert('err cannot like pic');
        });
    }

    return (
        <div className='picDiv'>
            {
                show ?
                    <img onClick={toggleShow} src={props.item.path} />
                    :
                    <p onClick={toggleShow}>{props.item.description}</p>
            }
            <br />
            <button onClick={likePic} className='picButton'>Like</button>
            <p className='picLikes'>{props.item.likes}</p>
        </div>

    )
}



export default GalleryItem;