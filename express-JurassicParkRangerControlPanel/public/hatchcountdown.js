let today = new Date();
let hatchYear = today.getFullYear();

if (today.getMonth() == 11 && today.getDate() > 10) {
    hatchYear = hatchYear + 1;
}

let hatchDate = new Date(hatchYear, 12, 10);
let dayMilliseconds = 1000 * 60 * 60 * 24;

let remainingDays = Math.ceil(
    (hatchDate.getTime() - today.getTime()) /
    (dayMilliseconds)

);

document.write(remainingDays + " days until velociraptor eggs hatch");

