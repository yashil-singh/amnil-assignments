/**
 * Logical Operators
 * These operators are used to evaluate multiple expressions.
 */

/**
 * Logical AND (&&)
 * All expressions involved must be true.
 * If any expression is false, it returns false.
 * When one expression is false, it stops checking further expressions.
 */

// When checking for user auth and subscription status
const isLoggedIn = true;
const hasSubscription = false;

// in this case user is redirected as user is logged in but doesn't have subscription
if(isLoggedIn && hasSubscription) {
    // provide access
} else {
    // redirect user
}

/**
 * Logical OR (||)
 * Only one expression involved must be true.
 * If any expression is true, it returns true.
 * When one expression is true, it stops checking further expressions.
 */

// When checking out in an e-commerce website
const isOnSale = true;
const isCouponUsed = false;

// in this case user is allowed a discount as the item is on sale
if(isOnSale || isCouponUsed) {
    // provide discount on price
}

/**
 * Logical NOT (!)
 * Reverses the given boolean expression
 */

// When checking if the user preference is dark mode or not
const isDarkMode = false;

if(!isDarkMode) {
    // toggle to light mode
}


