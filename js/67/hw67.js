// dayOfWeek module
const dayOfWeek = (function () {
    "use strict";

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return {
        getDayName: index => days[index - 1],
        getDayNumber:
            function getDayNumber(day) {
                const d = day.toLowerCase();
                for (let i = 0; i < days.length; i++) {
                    if (days[i].toLowerCase() === d) {
                        return i + 1;
                    }
                }
            }
    };
}
)();

console.log(dayOfWeek.getDayName(1));
console.log(dayOfWeek.getDayNumber('Sunday'));

// interest calculator module

const interestCalculator = (function () {
    "use strict";

    let rate;
    let years;

    return {
        setRate: newRate => rate = newRate,
        setYears: numOfYears => years = numOfYears,
        calculateInterest: amount => amount * rate / 100 * years
    };

}
)();

console.log(interestCalculator.setRate(10));
console.log(interestCalculator.setYears(5));
console.log(interestCalculator.calculateInterest(1000));

