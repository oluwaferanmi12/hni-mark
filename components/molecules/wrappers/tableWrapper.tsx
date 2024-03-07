import React from 'react'

export const TableWrapper = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='m-4 pt-3'>
        {children}
    </div>
  )
}
