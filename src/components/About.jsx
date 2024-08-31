// import React from 'react'

// const About = () => {
//   return (
//     <div>

//       <div>

        
//       </div>

   
  
//       <div class="container px-2 py-6">
//         <h4>
//           <b>Well</b>,<br />
//           As you may have noticed, my name is <b className='font-bold text-xl text-blue-200'>Swadhin Biswas.</b>
//         </h4>

//   <p class="text-xl text-gray-100 mb-6">
//     I'm currently pursuing a bachelor's degree. My areas of expertise include <b className='font-bold text-xl text-green-200'>backend development, data analysis, microservices, bots, Python, Mojo, and some foundational knowledge in frontend development. I'm also actively expanding my skills in artificial intelligence, machine learning, and data science.</b>
//   </p>
//   <p class="text-lg text-gray-300 mb-6">
//     I aspire to become a skilled <b className='font-bold text-xl text-emerald-400'>data scientist and a dedicated machine learning researcher.</b> 
//   </p>
//   <p class="text-lg text-gray-400 mb-4">
//     In my free time, I enjoy watching movies 🎬 and Tvshow 📺. It's a hobby that brings me joy and relaxation.
//   </p>
//   <p class="text-3xl text-gray-100 mb-2 font-bold">
//   ᴄₕₒₒₛₑ ₗᵢғₑ, ᴄₕₒₒₛₑ <b className='font-bold text-xl text-yellow-500'>ₕₐₚₚᵢₙₑₛₛ</b>, ₐₙᴅ ₘₐₖₑ ₛₒₘₑₒₙₑ 
//    <b className='font-bold text-xl text-yellow-500'> ₛₘᵢₗₑ.</b>
//   </p>
//   <p class="text-lg text-lime-500 font-italic ">
//     Thank you for reading.
//   </p>
// </div>
// </div>

//   )
// }

// export default About


import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg">
      <div className="text-center mb-8">
        <h4>
          <b>Well</b>,<br />
          As you may have noticed, my name is <b className="font-bold text-xl text-blue-200">Swadhin Biswas.</b>
        </h4>
      </div>

      <div className="text-lg text-gray-300">
        <p className="mb-6">
          I'm currently pursuing a bachelor's degree. My areas of expertise include <b className="font-bold text-green-200">backend development, data analysis, microservices, bots, Python, Mojo, and some foundational knowledge in frontend development. I'm also actively expanding my skills in artificial intelligence, machine learning, and data science.</b>
        </p>
        <p className="mb-6">
          I aspire to become a skilled <b className="font-bold text-emerald-400">data scientist and a dedicated machine learning researcher.</b>
        </p>
        <p className="mb-4">
          In my free time, I enjoy watching movies 🎬 and TV shows 📺. It's a hobby that brings me joy and relaxation.
        </p>
        <p className="font-bold text-gray-100">
          Choose life, choose <b className="font-bold text-xl text-yellow-500">happiness</b>, and make someone <b className="font-bold text-xl text-yellow-500">smile.</b>
        </p>
      </div>

      <p className="text-lg text-lime-500 font-italic text-center mt-4">
        Thank you for reading.
      </p>

      
    </div>
  );
};

export default About;