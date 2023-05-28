

type SectionProps = {}

const Location = (
  { }: SectionProps
) => {

  return (
    <section className="bg-white">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-base-400 mb-4">Our Location</h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">

            <div className="bg-gray-100 p-2 flex flex-wrap w-11/12 justify-center pt-6 px-4 rounded-xl shadow-lg pb-10 md:pb-6 border-gray-200">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="text-center md:text-end border-b md:border-b-0 md:border-r border-slate-300 p-5">
                  <h1 className="text-slate-500 text-2xl title-font font-medium mb-2">Store Name</h1>
                  <p className="leading-relaxed text-slate-500">Store Address</p>
                  <a href="tel:+1 407-555-5552">
                    <p className="leading-relaxed text-slate-500 mb-3 font-semibold">+63 9971234567</p>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:text-start text-center p-5">
                <div className="leading-relaxed text-slate-500">
                  <h2 className="font-bold text-lg">Business Hours</h2>
                  <div>
                    <p>MON - FRI - 9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p>SAT - SUN - 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}

export default Location;