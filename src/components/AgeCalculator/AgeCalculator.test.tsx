import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import AgeCalculator from './AgeCalculator';

describe('Renders component correctly', async () => {

  const { container } = render(
    <AgeCalculator/>
  );

  const title = container.querySelector('h1');
  
  it('Should have an h1 tag', async () => {  
    expect(title).not.toBeNull();
  });

  it('Should have required error messages', async () => {  
    fireEvent.click(screen.getByTestId('submit-button'));
    
    await waitFor(() => {
      const dayErrorMessage = container.querySelector('.input-day.error .error-message');
      expect(dayErrorMessage).not.toBeNull();

      const monthErrorMessage = container.querySelector('.input-month.error .error-message');
      expect(monthErrorMessage).not.toBeNull();

      const yearErrorMessage = container.querySelector('.input-year.error .error-message');
      expect(yearErrorMessage).not.toBeNull();

      expect(dayErrorMessage?.textContent).toContain('This field is required');
      expect(monthErrorMessage?.textContent).toContain('This field is required');
      expect(yearErrorMessage?.textContent).toContain('This field is required');
    });
  });

  it('Should have day not-valid error messages', async () => {  

    fireEvent.input(screen.getByLabelText('Day'), { target: { value: 'd' }});
    fireEvent.click(screen.getByTestId('submit-button'));
    
    await waitFor(() => {
      const errorMessage = container.querySelector('.input-day.error .error-message');
      expect(errorMessage?.textContent).toContain('Must be a valid day');
    });

    fireEvent.input(screen.getByLabelText('Day'), { target: { value: '0' }});
    fireEvent.click(screen.getByTestId('submit-button'));
    
    await waitFor(() => {
      const errorMessage = container.querySelector('.input-day.error .error-message');
      expect(errorMessage?.textContent).toContain('Must be a valid day');
    });

    fireEvent.input(screen.getByLabelText('Day'), { target: { value: '50' }});
    fireEvent.click(screen.getByTestId('submit-button'));
    
    await waitFor(() => {
      const errorMessage = container.querySelector('.input-day.error .error-message');
      expect(errorMessage?.textContent).toContain('Must be a valid day');
    });
  });

  it('Should have month not-valid error messages', async () => {  

    fireEvent.input(screen.getByLabelText('Month'), { target: { value: 'd' }});
    fireEvent.click(screen.getByTestId('submit-button'));
    
    await waitFor(() => {
      const errorMessage = container.querySelector('.input-month.error .error-message');
      expect(errorMessage?.textContent).toContain('Must be a valid month');
    });

    fireEvent.input(screen.getByLabelText('Day'), { target: { value: '0' }});
    fireEvent.click(screen.getByTestId('submit-button'));
    
    await waitFor(() => {
      const errorMessage = container.querySelector('.input-month.error .error-message');
      expect(errorMessage?.textContent).toContain('Must be a valid month');
    });

    fireEvent.input(screen.getByLabelText('Day'), { target: { value: '50' }});
    fireEvent.click(screen.getByTestId('submit-button'));
    
    await waitFor(() => {
      const errorMessage = container.querySelector('.input-month.error .error-message');
      expect(errorMessage?.textContent).toContain('Must be a valid month');
    });
  });

  it('Should have invalid date error messages', async () => {  

    fireEvent.input(screen.getByLabelText('Day'), { target: { value: '31' }});
    fireEvent.input(screen.getByLabelText('Month'), { target: { value: '4' }});
    fireEvent.click(screen.getByTestId('submit-button'));
    
    await waitFor(() => {
      const errorMessage = container.querySelector('.input-day.error .error-message');
      expect(errorMessage?.textContent).toContain('The date is invalid');
    });
  });

  it('Should have date is in the future error message', async () => {  

    fireEvent.input(screen.getByLabelText('Day'), { target: { value: '31' }});
    fireEvent.input(screen.getByLabelText('Month'), { target: { value: '4' }});
    fireEvent.input(screen.getByLabelText('Year'), { target: { value: '40000' }});
    fireEvent.click(screen.getByTestId('submit-button'));
    
    await waitFor(() => {
      const errorMessage = container.querySelector('.input-year.error .error-message');
      expect(errorMessage?.textContent).toContain('Must be in the past');
    });
  });
});