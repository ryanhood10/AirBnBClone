import ReactMapGL from "react-map-gl";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env




export default function Map () {


    return <ReactMapGL
    mapStyle="mapbox://styles/ryanhood4/clo3v5kpb002w01qvaqk92ocf"
    mapboxAccessToken={process.env.mapbox_key}
    >
    </ReactMapGL>;
}