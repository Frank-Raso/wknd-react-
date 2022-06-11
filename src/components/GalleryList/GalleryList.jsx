import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
    const [hook, setHook] = useState(null);

    return (
        <div className='picList'>
            {props.picsArray.map(item => (<GalleryItem item={item} />))}
        </div>
    )
}



export default GalleryList;