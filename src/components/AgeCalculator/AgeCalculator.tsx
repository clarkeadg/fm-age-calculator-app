import { useState } from 'react'
import { useFormik } from 'formik';
import imageUrl from '../../assets/images/icon-arrow.svg'
import './AgeCalculator.css'

interface IErrors {
  day?: string,
  month?: string,
  year?: string,
}

const AgeCalculator = () => {
  const initialValue = "- -";
  const [years, setYears] = useState(initialValue)
  const [months, setMonths] = useState(initialValue)
  const [days, setDays] = useState(initialValue)
  
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      day: '',
      month: '',
      year: '',
    },
    validate: (values) => {

      const errors:IErrors = {};

      const day = +values.day;
      const month = +values.month;
      const year = +values.year;

      // Check Day 
      if (!values.day) {
        errors.day = 'This field is required';
      } else {        
        if (Number.isNaN(day) || day < 1 || day > 31) {
          errors.day = 'Number is not between 1-31';
        }
      }

      // Check Month 
      if (!values.month) {
        errors.month = 'This field is required';
      } else {
        if (Number.isNaN(month) || month < 1 || month > 12) {
          errors.month = 'Number is not between 1-12';
        }
      }

      // Check Year 
      if (!values.year) {
        errors.year = 'This field is required';
      } else {
        if (Number.isNaN(year) || year < 1) {
          errors.year = 'The date is invalid';
        }
      }

      // Check invalid date
      const shortMonths = [4, 6, 9, 11];
      if (day > 30 && ~shortMonths.indexOf(month)) {
        errors.day = 'The date is invalid';
      }

      // Check February
      if (month == 2) {
        const isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        if (day > (isLeapYear ? 29 : 28)) {
          errors.day = 'The date is invalid';
        }
      }

      // Check if date is in the future
      const now = new Date();
      const dob = new Date(year, month-1, day);
      const diff = now.getTime() - dob.getTime();
      if (diff < 1) {
         errors.day = 'The date is in the future';
       }

      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      
      const day = +values.day;
      const month = +values.month;
      const year = +values.year;

      const dob = new Date(year, month-1, day);
      const now = new Date();

      const diff = new Date(now.getTime() - dob.getTime());

      const years = diff.getUTCFullYear() - 1970;
      const months = diff.getUTCMonth();
      const days = diff.getUTCDate() - 1;
      
      setYears(""+years);
      setMonths(""+months);
      setDays(""+days); 

      setSubmitting(false);
    },
  });

  return (
    <div className="age-calculator w-[840px] max-w-full mx-auto rounded-lg rounded-br-[200px] px-[28px] py-[65px] md:p-[55px]">
      {/* Form */}
      <div className="age-calculator-form pb-[82px] md:pb-[45px] border-b-2 relative">
        <form autoComplete="off" onSubmit={formik.handleSubmit} className="flex gap-[24px] md:gap-[30px]">
          <div className={`${formik.errors.day ? "error" : ""} leading-none`}>
            <label htmlFor="day" className="block text-[15px] uppercase tracking-[3px] mb-[10px] md:mb-[15px]">Day</label>
            <input 
              name="day" 
              type="text" 
              placeholder="DD"
              value={formik.values.day}
              onChange={formik.handleChange}
              className="text-[24px] px-[20px] py-[16px] md:text-[32px] md:px-[22px] md:py-[10px] border-2 focus:outline-none rounded-sm w-[112px] md:w-[160px]"
            />
            { formik.errors.day && <div className="error-message italic text-[13px] py-1">
              {formik.errors.day}
            </div> }
          </div>
          <div className={`${formik.errors.month ? "error" : ""} leading-none`}>
            <label htmlFor="month" className="block text-[15px] uppercase tracking-[3px] mb-[10px] md:mb-[15px]">Month</label>
            <input 
              name="month"
              type="text"
              placeholder="MM"
              value={formik.values.month}
              onChange={formik.handleChange}
              className="text-[24px] px-[20px] py-[16px] md:text-[32px] md:px-[22px] md:py-[10px] border-2 focus:outline-none rounded-sm w-[112px] md:w-[160px]"
            />
            { formik.errors.month && <div className="error-message italic text-[13px] py-1">
              {formik.errors.month}
            </div> }
          </div>
          <div className={`${formik.errors.year ? "error" : ""} leading-none`}>
            <label htmlFor="year" className="block text-[15px] uppercase tracking-[3px] mb-[10px] md:mb-[15px]">Year</label>
            <input 
              name="year"
              type="text"
              placeholder="YYYY"
              value={formik.values.year}
              onChange={formik.handleChange}
              className="text-[24px] px-[20px] py-[16px] md:text-[32px] md:px-[22px] md:py-[10px] border-2 focus:outline-none rounded-sm w-[112px] md:w-[160px]"
            />
            { formik.errors.year && <div className="error-message italic text-[13px] py-1">
              {formik.errors.year}
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
          <span className="result">{years}</span>
          <span className="px-[8px]">{`year${years == "1" ? "" : "s"}`}</span>
        </div>
        <div className="age-calculator-results-months mb-[8px] md:mb-1 whitespace-nowrap">
          <span className="result">{months}</span>
          <span className="px-[8px]">{`month${months == "1" ? "" : "s"}`}</span>
        </div>
        <div className="age-calculator-results-days whitespace-nowrap">
          <span className="result">{days}</span>
          <span className="px-[8px]">{`day${days == "1" ? "" : "s"}`}</span>
        </div>
      </div>
    </div>
  )
}

export default AgeCalculator
