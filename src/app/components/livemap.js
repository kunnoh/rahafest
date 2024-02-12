/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { AndroidLocation } from '../../utils/permissions'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

const LiveMap = () => {
  const [initPosition, setInitPosition] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getLocation = async () => {
      try {
        await AndroidLocation()
        const l = await Location.getCurrentPositionAsync()
        console.log('LOCATION: ', l)
      } catch (err) {
        console.log('ERROR: ', err)
        setLoading(false)
      }
    }
    getLocation()
  }, [])

  return (
    <MapView>
      {initPosition && (
        <Marker coordinate={{ latitude: initPosition.latitude, longitude: initPosition.longitude }}/>
      )}
    </MapView>
  )
}

export default LiveMap
