import React from 'react'

interface LoaderProps {
  isLoading: boolean
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return isLoading ? <div className='loading' /> : null
}

export default Loader
