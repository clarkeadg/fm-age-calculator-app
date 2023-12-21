import { describe, it, expect } from 'vitest';

import isLeapYear from './isLeapYear';

describe('Functions correctly', async () => {
  
  it('Should be a leap year', async () => {  
    const leapYear = isLeapYear(2020);
    
    expect(leapYear).toBeTruthy();
  });

  it('Should not a leap year', async () => {  
    const leapYear = isLeapYear(2021);
    
    expect(leapYear).not.toBeTruthy();
  });
});