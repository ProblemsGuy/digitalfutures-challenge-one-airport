//Asserts that 2 values are exactly equivilant
export function assertEquals(actualValue, expectedValue){
  if (actualValue !== expectedValue) throw new Error(`Expected ${expectedValue}, instead recieved ${actualValue}`);
}

//Asserts that something is true
export function assertTrue(actualValue){
    if (!actualValue) throw new Error("Returned false");
}

//Asserts that something is false
export function assertFalse(actualValue){
    if (actualValue) throw new Error("Returned true");
}

//Test function - credit to Ed Wright for creation
export const it = (str, testFunc) => {
    try {
        testFunc();
        console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
    }
    catch (err) {
        console.log("\x1b[31m%s\x1b[0m", `\t${str}`);
        console.error(err.message);
        console.log(err.stack);
    }
}