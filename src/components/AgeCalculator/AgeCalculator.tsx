import './AgeCalculator.css'

const AgeCalculator = () => {
  return (
    <div className="age-calculator bg-white rounded-lg p-4">
      {/* Form */}
      <div className="age-calculator-form pb-5 border-b-2 border-off-white">
        <form className="flex gap-4">
          <div className="">
            <label htmlFor="day" className="block text-smokey-grey uppercase tracking-wider">Day</label>
            <input name="day" type="text" size={2} className="border border-light-grey"/>
          </div>
          <div className="">
            <label htmlFor="month" className="block text-smokey-grey uppercase tracking-wider">Month</label>
            <input name="month" type="text" size={2} className="border border-light-grey"/>
          </div>
          <div className="">
            <label htmlFor="year" className="block text-smokey-grey uppercase tracking-wider">Year</label>
            <input name="year" type="text" size={4} className="border border-light-grey"/>
          </div>
        </form>
      </div>
      {/* Results */}
      <div className="age-calculator-results text-[50px] font-bold italic text-off-black">
        <div className="age-calculator-results-years">
          <span className="text-purple">38</span>
          <span className="px-1">years</span>
        </div>
        <div className="age-calculator-results-months">
          <span className="text-purple">3</span>
          <span className="px-1">months</span>
        </div>
        <div className="age-calculator-results-days">
          <span className="text-purple">26</span>
          <span className="px-1">days</span>
        </div>
      </div>
    </div>
  )
}

export default AgeCalculator
