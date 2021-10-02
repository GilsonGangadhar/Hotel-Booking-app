import {useState} from 'react'
import ReactMapGL from 'react-map-gl';


function Map() {
const[viewport, setViewport] = useState({
    width : '100%',
    height : '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
})

    return (
        <div>
            <ReactMapGL mapStyle="mapbox://styles/martin-luther-285/cku7kdvby2ga619nsa89tbkz9"
                mapboxApiAccessToken={process.env.mapbox_key}
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                >
            </ReactMapGL>
        </div>
    )
}

export default Map
