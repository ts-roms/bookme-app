
type SectionProps = {}

const Services = ({

}: SectionProps) => {
  return (
    <section className="bg-slate-50 py-10">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-base-400 mb-4">Our Services</h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

            <div className="p-4 md:w-[32.4%] flex flex-col text-center items-center relative overflow-hidden transition duration-300 transform border rounded shadow-xs hover:scale-105 group hover:shadow-md">
              <div className="absolute bottom-0 left-0 w-full h-[1px] duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="absolute top-0 left-0 w-full h-[1px] duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 right-0 w-[1px] h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img src="https://via.placeholder.com/86" alt="..." className="rounded-full w-12 filter sepia" />
              </div>
              <div className="flex-grow border-t-[1px]">
                <h2 className="text-base-400 text-lg title-font font-medium mb-3 mt-3">Haircut and Styling</h2>
                <p className="leading-relaxed text-base">Modern styling combined with precision cutting for Women, Men, and Children</p>
              </div>
            </div>

            <div className="p-4 md:w-[32.4%] flex flex-col text-center items-center relative overflow-hidden transition duration-300 transform border rounded shadow-xs hover:scale-105 group hover:shadow-md">
              <div className="absolute bottom-0 left-0 w-full h-[1px] duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="absolute top-0 left-0 w-full h-[1px] duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 right-0 w-[1px] h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img src="https://via.placeholder.com/86" alt="..." className="rounded-full w-12 filter sepia" />
              </div>
              <div className="flex-grow border-t-[1px]">
                <h2 className="text-base-400  text-lg title-font font-medium mb-3 mt-3">Coloting & Highlights</h2>
                <p className="leading-relaxed text-base">Get the perfect Balayage, Ombre, Highlights, or hair color, that you've always wanter.</p>
              </div>
            </div>

            <div className="p-4 md:w-[32.4%] flex flex-col text-center items-center relative overflow-hidden transition duration-300 transform border rounded shadow-xs hover:scale-105 group hover:shadow-md">
              <div className="absolute bottom-0 left-0 w-full h-[1px] duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="absolute top-0 left-0 w-full h-[1px] duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 right-0 w-[1px] h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img src="https://via.placeholder.com/86" alt="..." className="rounded-full w-12 filter sepia" />
              </div>
              <div className="flex-grow border-t-[1px]">
                <h2 className="text-base-400  text-lg title-font font-medium mb-3 mt-3">Hair Extensions</h2>
                <p className="leading-relaxed text-base">100% human hair available in Hand Tied, Tape-in or Clip-in hair extensions.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Services;