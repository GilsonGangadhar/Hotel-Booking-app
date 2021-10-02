import { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 11,
    },
    selectedLocation: {},
  };

  handleClick = (result) => {
    this.setState((prevState) => ({
        ...prevState,
      selectedLocation: result
    }));
  };

  componentDidMount() {
    const coordinates = this.props.searchResults.map((result) => ({
      longitude: result.long,
      latitude: result.lat,
    }));

    const handleCoordinates = () => {
      let center = getCenter(coordinates);
      this.setState((prevState) => ({
        ...prevState,
        viewport: {
          width: "100%",
          height: "100%",
          latitude: center.latitude,
          longitude: center.longitude,
          zoom: 11,
        },
      }));
    };

    handleCoordinates();
  }

  render() {
    console.log(this.state.selectedLocation, "selectedlocation")
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/gilson-gangadhar-285/cku97vpm40cjx18qsk0simvxe"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        {this.props.searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={10}
            >
              <p
                onClick={() => this.handleClick(result)}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
                role="img"
              >
                📌
              </p>
            </Marker>

            {/* pop up after clicking marker */}
            {this.state.selectedLocation.long === result.long ? (
                <Popup 
                    closeOnClick={true} 
                    onClose={() => this.handleClick({})} 
                    latitude={result.lat} 
                    longitude={result.long}
                >
                    {result.title}
                </Popup>
            ) : (
                false
            )}
          </div>
        ))}
      </ReactMapGL>
    );
  }
}

export default Map;
