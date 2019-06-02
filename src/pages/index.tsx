import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

import { IWeather } from '@/interfaces/weather';

import MainWeather from '@/components/mainWeather';


export default function index() {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState<IWeather[]>([])
  // 因为现在比较简单就自己获取参数了（主要是没时间了）
  const { city } = queryString.parse(window.location.search)
  let uri = './api/q'
  if (city) uri += '&cityid=' + city

  const abortController = new AbortController();
  const signal = abortController.signal;
  // 就相当于 页面挂载到这里的生命周期函数
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(uri, { signal })
        .then(results => results.json())
        setWeather([res])
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    return function cleanup() {
      abortController.abort();
    }
  }, [])
  return (
    <MainWeather
      weathers={weather}
      loading={loading}
    />
  )
}
