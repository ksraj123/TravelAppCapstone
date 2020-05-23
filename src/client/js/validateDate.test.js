import { validateDate } from './validateDate'

test("Testing if dates are if future", ()=>{
    expect(validateDate(new Date('December 17, 1995 03:24:00'))).toBeFalsy();
});