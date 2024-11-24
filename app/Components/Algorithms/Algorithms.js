import React from 'react';
import './Algorithms.css';
import jsLogo from './../../assets/javascript.svg';
import pyLogo from './../../assets/python.svg';
import Image from 'next/image';

export default function Algorithms() {
	return (
		<>
			<div className='Algorithms'>
				<h4 className='subtitle'>
					<Image src={jsLogo} alt='js' />
					JavaScript - algorithms
				</h4>
				<div className='Algorithms__inner'>
					<div className='Algorithms-item'>
						<details>
							<summary>1. Write a JavaScript function to calculate the sum of two numbers.</summary>
							<pre>{`const sum = (a, b) => {
    return a + b;
}`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>2. Write a JavaScript program to find the maximum number in an array.</summary>
							<pre>{`const findMax = (arr) => {
    return arr.reduce((item, max) => (item > max ? item : max), list[0]);
}`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>3. Write a JavaScript function to check if a given string is a palindrome.</summary>
							<pre>{`const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>4. Write a JavaScript program to reverse a given string.</summary>
							<pre>{`const reverseStr = (str) => {
    return str.split('').reverse().join('');
}`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.</summary>
							<pre>{`const toEvenArr = (arr) => {
    return arr.filter(item => item % 2 == 0);
}`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>6. Write a JavaScript program to calculate the factorial of a given number.</summary>
							<pre>{`const factorial = (num) => {
    result = 1;

    if (num === 0 || num === 1) return result;

    while (num >= 1) {
        result *= num;
        num--;
    }

    return result;
}`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>7. Write a JavaScript function to check if a given number is prime.</summary>
							<pre>{`const isPrime = (num) => {
    if (num === 2) return true;
    if (num <= 1) return false;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false
    }

    return true;
}`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>8. Write a JavaScript program to find the largest element in a nested array.</summary>
							<pre>
								{`const nestedMax = (arr) => {
    let result = arr[0][0];

    for (const nested of arr) {
        for (const num of nested) {
            if (num > result) result = num;
        }
    }

    return result;
}`}
							</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.</summary>
							<pre>
								{`const Fibonacci = (end) => {
    let sequence = [0, 1];

    if (end <= 0) return [];

    while (sequence[sequence.length - 1] + sequence[sequence.length - 2] < end) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }

    return sequence;
}`}
							</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>10.Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).</summary>
							<pre>{`const capitalize = (text) => {
    let arr = text.split(' ').map((item) => item[0].toUpperCase() + item.slice(1));

    return arr.join(' ');
}`}</pre>
						</details>
					</div>
				</div>
				<br />
				<hr />
				{/* Python */}
				<h4 className='subtitle py'>
					<Image src={pyLogo} alt='py' /> Python - algorithms
				</h4>
				<div className='Algorithms__inner'>
					<div className='Algorithms-item'>
						<details>
							<summary>1. Write a Python function to calculate the sum of two numbers.</summary>
							<pre>{`def sum(a, b):
    return a + b`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>2. Write a Python program to find the maximum number in a list.</summary>
							<pre>{`def list_max(user_list: list):
    result = user_list[0]

    for i in user_list:
        if i > result:
            result = i
    return result`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>3. Write a Python function to check if a given string is a palindrome.</summary>
							<pre>{`def is_palindrome(text) -> bool:
    result = False
    if text.lower() == text.lower()[::-1]:
        result = True

    return result
`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>4. Write a Python program to reverse a given string.</summary>
							<pre>{`def reverse_string(user_string) -> str:
    return user_string[::-1]
`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>5. Write a Python function that takes an array of numbers and returns a new array with only the even numbers.</summary>
							<pre>{`def get_even_list(user_list: list) -> list:
    result = list()
    for i in user_list:
        if i % 2 == 0:
            result.append(i)

    return result
`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>6. Write a Python program to calculate the factorial of a given number.</summary>
							<pre>{`def factorial(num: int) -> int:
    result = 1;

    if num < 0:
        return 0
    elif num == 0:
        return 1

    while (num >= 1):
        result *= num
        num -= 1

    return result
`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>7. Write a Python function to check if a given number is prime.</summary>
							<pre>{`def is_prime(num: int) -> bool:
    if num <= 1:
        return False
    elif num == 2:
        return True

    for i in range(2, num+1):
        if num % i == 0:
            return False
        else:
            return True

    return True
`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>8. Write a Python program to find the largest element in a nested array.</summary>
							<pre>
								{`def get_max(user_list: list):
    result = user_list[0][0]

    for i in user_list:
        if i > result:
            result = i

    return result;
`}
							</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>9. Write a Python function that returns the Fibonacci sequence up to a given number of terms.</summary>
							<pre>
								{`def Fibonacci(term: int) -> list:
    if term <= 0:
        return list()
    elif term == 1:
        return [0]

    sequence = [0, 1]
    while (sequence[-1] + sequence[-2] < term):
        sequence.append(sequence[-1] + sequence[-2])

    return sequence
`}
							</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>10. Write a Python program to convert a string to title case (capitalize the first letter of each word).</summary>
							<pre>{`def to_title_case(user_string: str) -> list:
    result = user_string.split()
    for i in result:
        result[i] = result[i].capitalize()
    result = user_string.split()

    return ' '.join(result)
`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>11. Write a Python program to sort list by bubble method.</summary>
							<pre>{`def bubble_sort(user_list: list) -> list:
    for t in range(len(user_list) - 1):
        for x in range(len(user_list) - 1):
            if user_list[x] > user_list[x+1]:
                user_list[x], user_list[x+1] = user_list[x+1], user_list[x]

    return user_list
`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>12. Write a Python program to create matrix.</summary>
							<pre>{`import math, random

def matrix(num: int):
    matrix = ''
    for i in range(num):
        row = ''
        for t in range(num):
            row += str(math.floor(random.randint(1, 9)))
            row += ' '
        row += '\\n'
        matrix += row

    return matrix
`}</pre>
						</details>
					</div>
					<div className='Algorithms-item'>
						<details>
							<summary>13. Write a Python function to check if a given number is Armstrong.</summary>
							<pre>{`def is_armstrong(num: int) -> bool:
    num_list = [int(item) for item in str(num)]

    result = 0

    for x in range(0, len(num_list)):
        num_list[x] **= len(num_list)
        result += num_list[x]

    if sum(num_list) == num:
        return True

    return False
`}</pre>
						</details>
					</div>
				</div>
			</div>
		</>
	);
}
