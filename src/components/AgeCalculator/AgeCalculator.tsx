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
    <div className="age-calculator w-[840px] mx-auto rounded-lg rounded-br-[200px] p-[55px]">
      {/* Form */}
      <div className="age-calculator-form pb-[45px] border-b-2 relative">
        <form onSubmit={(e)=>{ e.preventDefault(); handleSubmit(); }} className={`${error ? "error" : ""} flex gap-[30px]`}>
          <div className="">
            <label htmlFor="day" className={`block text-[15px] uppercase tracking-[3px]`}>Day</label>
            <input name="day" type="text" placeholder="DD" className={`text-[32px] px-[22px] py-[10px] border focus:outline-none rounded-sm w-[160px]`}/>
            { error && <div className="error-message italic text-[13px] py-1">
              This field is required
            </div> }
          </div>
          <div className="">
            <label htmlFor="month" className={`block text-[15px] uppercase tracking-[3px]`}>Month</label>
            <input name="month" type="text" placeholder="MM" className={`text-[32px] px-[22px] py-[10px] border focus:outline-none rounded-sm w-[160px]`}/>
            { error && <div className="error-message italic text-[13px] py-1">
              This field is required
            </div> }
          </div>
          <div className="">
            <label htmlFor="year" className={`block text-[15px] uppercase tracking-[3px]`}>Year</label>
            <input name="year" type="text" placeholder="YYYY" className={`text-[32px] px-[22px] py-[10px] border focus:outline-none rounded-sm w-[160px]`}/>
            { error && <div className="error-message italic text-[13px] py-1">
              This field is required
            </div> }
          </div>
          <button type="submit" className="absolute rounded-full flex items-center justify-center p-2 -bottom-4 right-0">
            <img src={imageUrl} alt="down-arrow"/>
          </button>
        </form>        
      </div>
      {/* Results */}
      <div className="age-calculator-results pt-[52px] text-[103px] font-bold italic leading-none">
        <div className="age-calculator-results-years mb-1">
          <span className="result">- -</span>
          <span className="px-[4px]">years</span>
        </div>
        <div className="age-calculator-results-months mb-1">
          <span className="result">- -</span>
          <span className="px-[4px]">months</span>
        </div>
        <div className="age-calculator-results-days">
          <span className="result">- -</span>
          <span className="px-[4px]">days</span>
        </div>
      </div>
    </div>
  )
}

export default AgeCalculator
