import React from 'react'
import Menu from '../components/Menu'

const Activity = () => {
  return (
    <div className="bg-gray-800 rounded-xl ">
    <header className=" h-16 flex items-center px-12">
      <Menu />
    </header>

    <main className="flex flex-wrap p-4">
      <div className="flex bg-red-500 h-40 m-2">

        
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 bg-red-500 h-40 m-2">
        {/* Content for the second section */}
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 bg-red-500 h-40 m-2">
        {/* Content for the third section */}
      </div>
      <div className="w-full bg-red-500 h-40 m-2">
        {/* Content for the fourth section */}
      </div>
    </main>
  </div>
  )
}

export default Activity