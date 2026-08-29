{
// Ternary Operator, Optional Chaining, Nullish coalescing

const age : number = 20;

if(age >= 18) {
    console.log('adult')
}
else {
    console.log('not adult')
}

const isAdult = age >= 18 ? 'adult' : 'not adult'

// nullish coalescing operator
// If you need to make a decision based on null or undefined value and have to set a default value.

const isAuthenticated = null;

const res1 = isAuthenticated ?? 'Guest' 
} 