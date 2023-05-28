
type PageProps = {
}

const Headers = ({ }: PageProps) => {

  return (
    <header className="relative bg-gray-900 text-white">
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a href="/" className="inline-flex items-center">
            <span className="ml-2 text-2xl tracking-wide text-gray-100">BookME</span>
          </a>
          <nav className="flex">
            <ul className="flex">
              <li className="my-auto px-5">
                <p className="ml-2 text-2xl tracking-wide">Our Service</p>
              </li>
              <li className="my-auto px-5">
                <p className="ml-2 text-2xl tracking-wide">About Us</p>
              </li>
              <li className="">
                <img src="https://via.placeholder.com/64" alt="..." className="rounded-full ml-5" />
              </li>
            </ul>
            <div className="my-auto ml-5 lg:hidden">
              <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded">
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                  <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                  <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Headers;