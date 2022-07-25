import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const useFetch = (params) => {
  const { pathname } = useLocation() /* Ruta de la ubicacion*/
  const { id } = useParams() 
  const [data, setData] = useState({})
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      /*https://rickandmortyapi.com/api/location */
      `https://rickandmortyapi.com/api/${pathname}${page && `?page=${page}`}${params || ''}`
    )
      .then((res) => res.json())
      .then((info) => {
        setData(info)
        setIsLoading(false)
        setError(null)
      })

      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [params, page, id]) /*dependencias */

  return { data, isLoading, error, page, setPage }
}
