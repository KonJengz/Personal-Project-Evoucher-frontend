export default function Input({
    placeholder,
    typeInput = "text",
    error,
    value,
    onChange,
    name
  }) {
    return (
      <>
          <input
              placeholder={placeholder}
              type={typeInput}
              className={`w-full h-11 px-3 py-1.5 border rounded-full placeholder:text-[0.8rem] placeholder:font-light text-[#272727] focus:outline-none ${error
                  ? 'border-[#E84A4A] focus:ring-red-200'
                  : 'border-gray-300 focus:border-[#2BB673] focus:ring-[#75edb3]'}`}
              value={value}
              onChange={onChange}
              name={name}
  
          />
          {error ? <small className="text-red-500">{error}</small> : null}
      </>
    )
  }
  