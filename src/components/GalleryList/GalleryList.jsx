import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
    const [hook, setHook] = useState(null);

    return (
        <div>
            <ul>
                {props.picsArray.map(item => (<GalleryItem item={item} />))}
            </ul>
        </div>
    )
}



export default GalleryList;