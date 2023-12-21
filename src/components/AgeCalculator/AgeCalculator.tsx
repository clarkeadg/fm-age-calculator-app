import { useState } from 'react';
import imageUrl from '../../assets/images/icon-arrow.svg'
import './AgeCalculator.css'

const AgeCalculator = () => {
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    console.log("handleSubmit")
    setError(true)
  }

  return (
    <div className="age-calculator w-[840px] max-w-full mx-auto rounded-lg rounded-br-[200px] px-[28px] py-[65px] md:p-[55px]">
      {/* Form */}
      <div className="age-calculator-form pb-[82px] md:pb-[45px] border-b-2 relative">
        <form onSubmit={(e)=>{ e.preventDefault(); handleSubmit(); }} autoComplete="off" className={`${error ? "error" : ""} flex gap-[24px] md:gap-[30px]`}>
          <div className="leading-none">
            <label htmlFor="day" className="block text-[15px] uppercase tracking-[3px] mb-[10px] md:mb-[15px]">Day</label>
            <input name="day" type="text" placeholder="DD" className="text-[24px] px-[20px] py-[16px] md:text-[32px] md:px-[22px] md:py-[10px] border-2 focus:outline-none rounded-sm w-[112px] md:w-[160px]"/>
            { error && <div className="error-message italic text-[13px] py-1">
              This field is required
            </div> }
          </div>
          <div className="leading-none">
            <label htmlFor="month" className="block text-[15px] uppercase tracking-[3px] mb-[10px] md:mb-[15px]">Month</label>
            <input name="month" type="text" placeholder="MM" className="text-[24px] px-[20px] py-[16px] md:text-[32px] md:px-[22px] md:py-[10px] border-2 focus:outline-none rounded-sm w-[112px] md:w-[160px]"/>
            { error && <div className="error-message italic text-[13px] py-1">
              This field is required
            </div> }
          </div>
          <div className="leading-none">
            <label htmlFor="year" className="block text-[15px] uppercase tracking-[3px] mb-[10px] md:mb-[15px]">Year</label>
            <input name="year" type="text" placeholder="YYYY" className="text-[24px] px-[20px] py-[16px] md:text-[32px] md:px-[22px] md:py-[10px] border-2 focus:outline-none rounded-sm w-[112px] md:w-[160px]"/>
            { error && <div className="error-message italic text-[13px] py-1">
              This field is required
            </div> }
          </div>
          <button type="submit" className="absolute rounded-full flex items-center justify-center w-[80px] h-[80px] -ml-[40px] -bottom-[40px] left-[50%] md:w-[96px] md:h-[96px] md:-ml-0 md:-bottom-[50px] md:left-auto md:right-[4px]">
            <img src={imageUrl} alt="down-arrow"/>
          </button>
        </form>        
      </div>
      {/* Results */}
      <div className="age-calculator-results pt-[86px] text-[72px] md:pt-[52px] md:text-[103px] font-bold italic leading-none">
        <div className="age-calculator-results-years mb-[8px] md:mb-1 whitespace-nowrap">
          <span className="result">- -</span>
          <span className="px-[4px]">years</span>
        </div>
        <div className="age-calculator-results-months mb-[8px] md:mb-1 whitespace-nowrap">
          <span className="result">- -</span>
          <span className="px-[4px]">months</span>
        </div>
        <div className="age-calculator-results-days whitespace-nowrap">
          <span className="result">- -</span>
          <span className="px-[4px]">days</span>
        </div>
      </div>
    </div>
  )
}

export default AgeCalculator
