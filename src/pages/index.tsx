import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { IWeather } from '@/interfaces/weather';

import MainWeather from '@/components/mainWeather';

export default function index() {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState<IWeather[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('./api/q')
        setWeather([res.data])
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <MainWeather
      weathers={weather}
      loading={loading}
    />
  )
}
