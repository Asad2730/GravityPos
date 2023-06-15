import React from 'react'

export default function CustomText({label}) {
  return (
    <>
     <label htmlFor="email"className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    </>
  )
}

