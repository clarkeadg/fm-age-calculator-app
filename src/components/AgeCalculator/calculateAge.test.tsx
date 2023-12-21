import { describe, it, expect } from 'vitest';

import calculateAge from './calculateAge';

describe('Functions correctly', async () => {
  
  it('Should have correct age', async () => {  

    const age = calculateAge(1980, 4, 23, 2023, 12, 21);
    
    expect(age.years).toEqual(43);
    expect(age.months).toEqual(7);
    expect(age.days).toEqual(28);
  });

  it('Should have correct age for today', async () => {  

    const age = calculateAge(2023, 12, 21, 2023, 12, 21);
    
    expect(age.years).toEqual(0);
    expect(age.months).toEqual(0);
    expect(age.days).toEqual(0);
  });

  it('Should have correct age for yesterday', async () => {  

    const age = calculateAge(2023, 12, 20, 2023, 12, 21);
    
    expect(age.years).toEqual(0);
    expect(age.months).toEqual(0);
    expect(age.days).toEqual(1);
  });

  it('Should have correct age for last year', async () => {  

    const age = calculateAge(2022, 12, 20, 2023, 12, 21);
    
    expect(age.years).toEqual(1);
    expect(age.months).toEqual(0);
    expect(age.days).toEqual(1);
  });

  it('Should have correct age for years ago', async () => {  

    const age = calculateAge(2020, 1, 1, 2023, 12, 21);
    
    expect(age.years).toEqual(3);
    expect(age.months).toEqual(11);
    expect(age.days).toEqual(20);
  });

});