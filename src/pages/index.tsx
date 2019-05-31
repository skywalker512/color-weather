import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { IWeather } from '@/interfaces/weather';

import MainWeather from '@/components/mainWeather';

export default function index() {
  const [loading, setLoading] = useState(true)
  const [weathers, setWeather] = useState<IWeather[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('./api/w')
        setWeather(res.data.HeWeather6)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <MainWeather
      weathers={weathers}
      loading={loading}
    />
  )
}
