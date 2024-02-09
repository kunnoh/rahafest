import { Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { loadAsync } from 'expo-font'

const MamaKilo = ({ children, color, size, height }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    async function loadFonts () {
      await loadAsync({
        'MamaKilo Black': require('../../assets/fonts/MamaKilo_Decorative.otf')
      })
      setFontsLoaded(true)
    };

    loadFonts()
  }, [])

  if (!fontsLoaded) return <Text style={{ color, fontSize: size, justifyContent: 'center', alignItems: 'center' }}>{children}</Text>

  return (
    <Text style={{ fontFamily: 'MamaKilo Black', color, fontSize: size, justifyContent: 'center', alignItems: 'center', height }}>{children}</Text>
  )
}

export default MamaKilo
