
const advantages = [
  "To help you start a business.",
  "To give you market insights.",
  "To tell you about benchmarking",
  "To help you raise capital",
  "To help you doing boring work (financials).",
  "and most important, to talk to us.",
]


export default function NewFeatures2() {





  return (
    <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div className="relative mx-auto flex flex-col items-center max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl md:text-5xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            We have been there...
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center md:text-lg text-md text-gray-500 font-light">
            Some of our clients have had brilliant ideas ... <br />but unfortunately, due to their lack of organization <br />  they experienced consistent financial losses month after month.
          </p>
        </div>





        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div className="relative mt-20 md:mt-32 bg-slate-100 p-8 rounded-xl max-w-3xl">
          <h2 className="text-center text-3xl md:text-5xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            ...so we created Gotely.
          </h2>
          <div className="grid grid cols-1 md:grid-cols-2 pt-4 ">
            {advantages.map((k, i) => (
              <div className="flex flex-row items-center py-2" key={i}>
                <svg className="w-[34px] me-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM17.0742 8.73234L10.7742 16.2323C10.7051 16.3147 10.6191 16.3812 10.5221 16.4273C10.425 16.4735 10.3192 16.4983 10.2117 16.5H10.1991C10.0939 16.5 9.99 16.4778 9.89398 16.435C9.79797 16.3922 9.71202 16.3297 9.64172 16.2516L6.94172 13.2516C6.87315 13.1788 6.81981 13.0931 6.78483 12.9995C6.74986 12.9059 6.73395 12.8062 6.73805 12.7063C6.74215 12.6064 6.76617 12.5084 6.8087 12.4179C6.85124 12.3275 6.91142 12.2464 6.98572 12.1796C7.06002 12.1127 7.14694 12.0614 7.24136 12.0286C7.33579 11.9958 7.43581 11.9822 7.53556 11.9886C7.63531 11.995 7.73277 12.0213 7.82222 12.0659C7.91166 12.1106 7.99128 12.1726 8.05641 12.2484L10.1794 14.6072L15.9258 7.76766C16.0547 7.61863 16.237 7.52631 16.4335 7.51066C16.6299 7.49501 16.8246 7.55728 16.9754 7.68402C17.1263 7.81075 17.2212 7.99176 17.2397 8.18793C17.2582 8.3841 17.1988 8.57966 17.0742 8.73234Z" fill="#0891b2" />
                </svg>
                <span>{k}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}