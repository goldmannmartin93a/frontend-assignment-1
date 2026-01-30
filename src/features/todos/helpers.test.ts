import {formatLocalDate} from './helpers';
import {cs} from 'date-fns/locale';

describe('formatLocalDate (date only)', () => {
  it('formats Date object as Czech local date', () => {
    const date = new Date(2024, 2, 5);

    const result = formatLocalDate(date, cs);

    expect(result).toBe('5. 3. 2024');
  });

  it('formats ISO date string as Czech local date', () => {
    const isoDate = '2024-03-05';

    const result = formatLocalDate(isoDate, cs);

    expect(result).toBe('5. 3. 2024');
  });
});
