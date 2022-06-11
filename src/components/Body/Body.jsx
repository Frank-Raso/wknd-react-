import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import './Body.css';


function Body(props) {
    const [pics, setPics] = useState([]);
    useEffect(() => {
        getPic();
    }, [{pics}]);

    function getPic() {
        axios.get('/gallery').then((response) => {
            setPics(response.data);
        }).catch((err) => {
            console.log(err);
            alert('err getting pics');
        });
    }
    return (
        <div>
                <GalleryList picsArray={pics} />
        </div>
    )
}





export default Body;