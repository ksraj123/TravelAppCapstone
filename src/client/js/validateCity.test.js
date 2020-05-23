import { validateCity } from './validateCity'

test("Tests detection of cities with Regex", ()=>{
    expect(validateCity("paris")).toBeTruthy();
});

test("Tests detection of cities with Regex", ()=>{
    expect(validateCity("p121aris")).toBeFalsy();
});