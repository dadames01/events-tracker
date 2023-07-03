import { describe, test, expect } from 'vitest';
import { getStartingWeekDay, getLastDayOfMonth } from './date.utils';

describe('date utils', () => {
  test('should get starting weekday for given month and year', () => {
    const year = 2023;
    const months = [0, 4, 7, 10, 5, 11, 6];
    const startingWeekDaySunday = getStartingWeekDay(year, months[0]);
    const startingWeekDayMonday = getStartingWeekDay(year, months[1]);

    expect(startingWeekDaySunday).toBe(0);
    expect(startingWeekDayMonday).toBe(1);
  });

  test('should get last day for december correctly', () => {
    const year = 2023;
    const month = 11;

    const lastDayOfDecember = getLastDayOfMonth(year, month);
    expect(lastDayOfDecember).toBe(31);
  });
});
