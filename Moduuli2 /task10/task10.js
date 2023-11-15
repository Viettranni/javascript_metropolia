'use strict';

// Participants
const candidates = [];

const numberOfCandidates = parseInt(prompt('Enter the amount of participants: '))

for (let i = 1; i <= numberOfCandidates; i++) {
    let candidateName = prompt(`Name for candidate ${i}`)

    const candidate = {
        name: candidateName,
        votes: 0,
    };

    candidates.push(candidate)
}


// Voters
const numberOfVoters = parseInt(prompt('Enther the amount of Voters: '))

for (let i = 0; i < numberOfVoters; i++) {
    const voterAnswer = prompt(`Who will you vote for? ${candidates.map(candidate => candidate.name).join(', ')}`);

    const selectCandidate = candidates.find(candidate => candidate.name === voterAnswer)

    if (selectCandidate) {
    selectCandidate.votes++;
    console.log(`You voted for ${selectCandidate.name}.`);
    }
}

// Compare votes and announce the winner
candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes}.`);
console.log('results: ')
console.log(candidates);

for (let i = 0; i < numberOfCandidates; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes\n`)
}

