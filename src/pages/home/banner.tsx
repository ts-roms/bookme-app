

type BannerProps = {}

const Banner = (
  {}: BannerProps
) => {

  return (
    <section>
      <div role="banner" className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="mx-auto">
          <div className="w-full relative">
            <img src="https://i.pinimg.com/564x/09/59/b7/0959b75817eec2ed51d48bb883ba49fa.jpg" alt="..." className="w-full h-[420px] object-cover" />
            <div className="absolute top-0 justify-center flex items-center h-full bg-gray-900/50 w-full text-center text-white">
              <div className="">
                <h1 className="font-bold text-5xl text-white uppercase">Book <span className="bg-blue-700 px-3 rounded-lg">ME</span></h1>
                <p className="py-6 text-3xl font-thin italic">A booking system for hair salon and barbershops</p>
                <p className="bg-blue-700 w-48 py-2 rounded-lg shadow-lg mx-auto text-3xl">Book Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Banner;