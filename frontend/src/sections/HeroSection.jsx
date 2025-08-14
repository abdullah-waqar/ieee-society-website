import Navbar from '../components/Navbar'

const HeroSection = () => {
  return (
    <div className='bg-black text-white pb-10 h-[100%]'>
        {/* NAVBAR */}
        <Navbar />

        {/* Body */}

        <div className='ml-40 mr-40 mt-40 flex flex-col ml-4 lg:flex-row justify-between '>
            <img className='h-[25rem] rounded-br-2xl rounded-tl-2xl shadow-md' src="https://img.freepik.com/free-vector/employee-celebration-concept-illustration_114360-14531.jpg?t=st=1751888473~exp=1751892073~hmac=0cb404e863e3487b1fac846323ec812558b6927dc164886e926ee358813ad937&w=1380" alt="" />

            <div className='w-[30rem]  md:m-auto  mt-5'>
                <h4 className='text-[0.8rem] text-gray-400'>Society</h4>
                <h1 className='text-3xl'>IEEE Society</h1>
                <p className='mt-3 text-gray-400'> IEEE is the world’s largest technical professional organization, and our student branch is dedicated to fostering innovation, leadership, and collaboration in engineering and technology. We organize workshops, competitions, tech talks, and hands-on sessions to empower students beyond the classroom.</p>

            </div>
        </div>

    </div>
  )
}

export default HeroSection