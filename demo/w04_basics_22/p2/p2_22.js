import { sdata } from "./data.js";

const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");

console.log(sdata);

const computePass = (s) => {
    let pass = 0;
    s.forEach(score => {
        if(score >= 59.5) pass++;
    });
    return pass;
}

const computeFail = (s) => {
    let fail = 0;
    s.forEach(score => {
        if(score < 59.5) fail++;
    });
    return fail;
}

const computeHeightest = (s) => {
    let highest = -100;
    s.forEach(score => {
        if(score > highest) highest = score;
    });
    return highest;
};

const computeLowest = (s) => {
    let lowest = 200;
    s.forEach(score => {
        if(score < lowest) lowest = score;
    });
    return lowest;
};

const computeAverage = (s) => {
    let sum = 0;
    s.forEach(score => sum += score);
    return (sum / s.length).toFixed(1);
};

const outputStat1 = (s) => {
    result1.innerHTML = `
        <h3 class="my-4">Array Staticistics</h3>
        <p>sdata original:</p>
        <p>${JSON.stringify(s)}</p>
        <p>Total: ${s.length}</p>
        <p>Pass: ${computePass(s)}</p>
        <p>Fail: ${computeFail(s)}</p>
        <p>Heightest: ${computeHeightest(s)}</p>
        <p>Lowest: ${computeLowest(s)}</p>
        <p>Average: ${computeAverage(s)}</p>
    `;
};

// sdata.push(85);

outputStat1(sdata);