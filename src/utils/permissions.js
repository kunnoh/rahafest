/* eslint-disable react-native/split-platform-components */
import { PermissionsAndroid } from 'react-native'

const AndroidLocation = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'We need your location',
        // buttonNeutral: 'Ask me later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      }
    )
    if (granted === 'granted') {
      console.log('You can use Geolocation')
      return true
    } else {
      console.log('You cannot use Geolocation')
      return false
    }
  } catch (error) {
    alert(error)
  }
}

export {
  AndroidLocation
}
