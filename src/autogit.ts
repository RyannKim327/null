// Function to determine voting eligibility based on age
function isEligibleToVote(age: number): boolean {
    return age >= 18;
}

// Main function to handle user input and output
function main(): void {
    // Simulating user input (in a real environment, you might use prompts or forms)
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Please enter your name: ', (name: string) => {
        readline.question('Please enter your age: ', (ageInput: string) => {
            const age = parseInt(ageInput, 10);

            if (isNaN(age)) {
                console.log('Invalid age entered. Please enter a valid number.');
            } else {
                const canVote = isEligibleToVote(age);
                if (canVote) {
                    console.log(`Hello, ${name}! You are eligible to vote.`);
                } else {
                    console.log(`Hello, ${name}! You are not yet eligible to vote.`);
                }
            }

            readline.close();
        });
    });
}

// Run the main function
main();
Please enter your name: Alice
Please enter your age: 25
Hello, Alice! You are eligible to vote.
