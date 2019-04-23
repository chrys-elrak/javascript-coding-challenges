# find the maximum number of consecutive 1 in the base-2 of an int

## Challenge

Given a base-10 integer, n , convert it to binary (base-2). Then find and return the  integer denoting the maximum number of consecutive 1's in n's binary representation.

### input format
``sh
A single integer, n
```
### Constraints
``sh
n >= 1 && n <= 10^6
```

### output format
A single integer

## Example
### input
``sh
13
```
### output should be
``sh
2
```
### Explanation
The binary representation of 13 is 1101 , so the maximum number of consecutive 1's is 2.