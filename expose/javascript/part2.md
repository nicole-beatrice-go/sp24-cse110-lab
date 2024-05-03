1. Line 12 will print `prices.length` (length of the array of prices) - 1. Since the input `prices` array is of length 3, then it would print 2. This is because that's the highest that `i` will go in the for loop. Additionally, the `i` will remain the same because it was declared by `var` and variables declared with `var` are accessible in the same function (the print statement in line 12 and the declaration of `i` are in the same function).
2. Line 13 will print the `discountedPrice` of the last price in the array `prices`. This ends up being 150 since it'd be applied to the last item in the input `prices` array, 300 with a 50% discount (300 * 0.5 is 150). This means that it's the last price times (1 - discount). This is because that was the operations defined to `discountedPrice` and because it will still be accessible outside of the loop since it was declared by `var`. Additionally, it'd just be the last saved declaration of `discountedPrice`, which would've been lastly done to the last item in the `prices` array (since the for loop arrays through the whole array from beginning to end.
3. Line 14 will print the `finalPrice` of the last price in the array `prices`. This ends up being 150 still from question 2 because there is no rounding needed. This means that it's the `discountedPrice` of the last item in the prices array rounded to the nearest cent (this is done by going 2 decimal places right to get rid of the cents, rounding to the nearest integer to get rid of the rest of the decimal places, then going 2 decimal places to the right to get the two decimal places of cents back). This is also because that was the operations defined to `finalPrice` and because it will still be accessible outside of the loop since it was declared by `var`. Additionally, it'd just be the last saved declaration of `finalPrice`, which would've been lastly done to the last item in the `prices` array (since the for loop arrays through the whole array from beginning to end.
4. Line 16 will return the finished product of `discounted`, which is the array of the same prices from `prices` except with the discounts applied to each. This ends up being `[50, 100, 150]` because that's the 50% discount of each for each element. For one, it was declared using `var` so it is accessible even if it was added to within the "if" block statement. Additionally, this is also the outcome because the `finalPrice` of each element is pushed onto the `discounted` array in the for loop that iterates through all of `prices`.
5. Line 12 should still print `prices.length` (length of the array of prices) - 1. Since the input `prices` array is of length 3, then it would print 2. The reason it would be the same is because technically the print statement on line 12 and the for loop header in line 6 are still in the same block because the header isn't in its own loop block. This means that it is still accessible (`let` declared variables are only accessible in the same block due to its scope).
6. Line 13 will throw an error because `discountedPrice` is declared within a different code block. This means it isn't accessible and doesn't even have a declaration in the same block to begin with, so there's no data to reach and display. `let` declared videos are only accessible in the same block.
7.  Line 14 will just print 0. This is because `let` declared videos are only accessible in the same block. `finalPrice` is only altered within the `if` block so the changes tot `finalPrice` wouldn't be accessible. Instead, only the declaration in the same block at line 4 would be accessible. Here, it is defined to be 0 so 0 will simply be outputted.
8.  The function will just return an empty array `[]`. This is for the same reason as in question 7. `discounted` only has the discounted prices pushed onto it within the `if` block. These changes aren't accessible since let` declared videos are only accessible in the same block so we use the declaration of `discounted` that was made in the same block and defined to be `[]` in line 3.
9.  Line 12 would be the same as question 5 and should still print `prices.length` (length of the array of prices) - 1. This is because `i` is still defined using `let`.
10.  Line 13 should print `prices.length`, the length of the `prices` array. In this case, it would be 3 because the length of the input `[100,200,300]` is 3. This is because the `length` of defined as `prices.length` in the beginning. It didn't have any changes but even so, it's defined as `const` so it would remain 3 after declared as that (the value couldn't be changed).
11.  The function would return `[]` because it's defined as `const` so it can't be changed.
<br />
12a. student.name
<br />
12b. student["Grad Year"]
<br />
12c. student.greet()
<br />
12d. student["Favorite Teacher"]
<br />
12e. student.courseLoad
<br />
13a. '32' because the + can handle concatenating strings and converts the 2 to a string since the '3' is a string
<br />
13b. 1 because the - operator needs numbers so it would convert the '3' to a number
<br />
13c. 3 because the null would be converted to 0 for the + operator
<br />
13d. '3null' because the null would be converted into a string since the '3' was a string
<br />
13e. 4 because the true would be converted to 1 for the + operator
<br />
13f. 0 because false and null would be interpreted as 0 as number for the + operator
<br />
13g. '3undefined' because the undefined would become a string to concatenate with the string '3'
<br />
13h. Would have an error because undefined cannot be converted into a number for the - operator (NaN).
<br />
14a. True because the '2' would be converted into a number and 2 > 1 is true
<br />
14b. True because it would be treated "alphabetically" since they are strings and "2" is further in the numbers as the first digit compared to the "1" in "12"
<br />
14c. True because the second '2' would be turned to a number and it is true that 2 is equal to 2.
<br />
14d. False because they have different types and === considers that
