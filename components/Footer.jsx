import React from 'react'

const Footer = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@1</p></div>
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@2</p></div>
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@3</p></div>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@4</p></div>
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@5</p></div>
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@6</p></div>
          </div>
        </div>
        <div className="max-w-screen-lg pt-20">
          
        </div>
      </div>
    </>
  )
}

export default Footer
