// NAMA : FIRMANSYAH ROZY
// Buatlah sebuah method/function untuk me-return biodata Anda, dengan ketentuan
// -​ ​name(string)
// - address (String)
// - hobbies (Array)
// - is_married (Boolean)
// - school (Obj) with key highSchool, and university
// - skills (Array of Obj, with key “​name​” and “​score​”)
// Return value harus berformat JSON!

firmansyahRozy = () => {
    let name, address, hobbies, is_married;
    name = "Firmansyah Rozy";
    address = "Cempaka st. Medan";
    hobbies = "Football";
    is_married = false;
    const school = {"highschool": "SMA CTF Medan", "university": "-"};
    const skills = [{"name": "html", "score": 8}, {"name": "css", "score": 7}, {"name": "javascript", "score": 7}];
    return {"Name": name, "Address": address, "Hobbies": hobbies, "is_married": is_married, "Schools": school, "Skills": skills};
}
console.log(firmansyahRozy());