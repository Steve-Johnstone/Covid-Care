import { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
    const [ selected, setSelected ] = useState({});
  
    const onSelect = item => {
      setSelected(item);
    }

    const locations = [
        {
          name: "Jane B.",
          task: "Food shopping",
          location: { 
            lat: 51.5153,
            lng: 0.0722
          },
        },
        {
          name: "Emily J.",
          task: "Food shopping",
          location: { 
            lat: 51.5203,
            lng: 0.0293
          },
        },
        {
          name: "Paul B.",
          task: "Dog walking",
          location: { 
            lat: 51.5311,
            lng: 0.0481
          },
        },
        {
          name: "Ann M.",
          task: "Pharmacy prescriptions",
          location: { 
            lat: 51.5333,
            lng: 0.0435
          },
        },
        {
          name: "Richard D.",
          task: "Dog walking",
          location: { 
            lat: 51.5218,
            lng: 0.0555
          },
        }
      ];
  
  const mapStyles = {        
    height: "80vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 51.5148, lng: 0.0651
  }
  
  return (
      <div className='mapContainer'>
      <h4 style={{backgroundColor: 'white', textAlign: 'left', padding: '5px', marginBottom: '0px'}}>Your local area</h4>
     <LoadScript
       googleMapsApiKey='AIzaSyDlApOX8t8A95Pzv-ZJlbW_aS6H9cog6Ak'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker 
                key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
             />
              )
            })
         }
                 {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}<br />Needs help with: {selected.task}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>
     </div>
  )
 }

export default MapContainer;
