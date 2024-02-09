import { useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service'
import { AndroidLocation } from './permissions'

const LiveMap = () => {
  const result = AndroidLocation()

  result.then((res) => {
    alert(res)
  })
  const [initPosition, setInitPosition] = useState(null)
  useEffect(() => {
    // getCurrentLocation()
  }, [])

  // eslint-disable-next-line no-unused-vars
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { lat, long } = position.coords
        setInitPosition({ lat, long })
      },
      (error) => {
        console.error(error)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
  }
  return (
    alert(initPosition)
  )
}

export default LiveMap
