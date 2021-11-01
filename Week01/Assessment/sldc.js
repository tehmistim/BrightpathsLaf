// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements
// Design
// Implementation
// Maintain
// Planning
// Testing & Integration

let array1 = ['Planning', 'Analysis of Requirements', 'Design', 'Implementation', 'Testing & Integration', 'Maintain'];{
    console.log(array1)
}

let array2 = ['Planning what the client wants, needs and expects while figuring out resources needed',
               'Defining problems and goals, strengths & weaknesses',
                'The overall architecture of the software, app, etc.',
                'Production and coding of the software, app, etc.',
                'Quality control and test all functions, features and usability',
                'Updates and general "housekeeping" in the code' ]

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the 
    values of each variable to a definition of the step.
*/
for (let i = 0; i < array1.length && i < array2.length; i++){

    console.log(array1[i] + array2[i])
}
