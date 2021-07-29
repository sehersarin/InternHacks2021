export const availabilityOptions = [
    { day: 'Monday' },
    { day: 'Tuesday' },
    { day: 'Wednesday' },
    { day: 'Thursday' },
    { day: 'Friday' },
    { day: 'Saturday' },
    { day: 'Sunday' }
]

export const industryOptions = [
    { industry: 'Tech' },
    { industry: 'FinTech' },
    { industry: 'MedTech'}
];

export const interestOptions = [
    { interest: 'AI' },
    { interest: 'Finance' },
    { interest: 'Healthcare' },
    { interest: 'Machine Learning' },
    { interest: 'Mobile Dev' },
    { interest: 'Software Engineering' },
    { interest: 'Web Dev' },
    { interest: 'UI/UX Design' }
]

export const expertiseOptions = [
    { expertise: 'Android Dev' },
    { expertise: 'Career Advice' },
    { expertise: 'Interview Prep' },
    { expertise: 'iOS Dev' },
    { expertise: 'Product Management' },
    { expertise: 'Software Engineering' },
    { expertise: 'UI/UX Design' }
]

export const professionals = [
    {
        firstName: "John",
        lastName: "Doe",
        industry: industryOptions[0],
        company: "Apple",
        position: "Software Engineering Intern",
        availability: availabilityOptions[1],
        interests: [
            interestOptions[0],
            interestOptions[5],
            interestOptions[6]
        ],
        expertise: [
            expertiseOptions[5],
            expertiseOptions[1]
        ]
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        industry: industryOptions[0],
        company: "Facebook",
        position: "Product Management Intern",
        availability: availabilityOptions[2],
        interests: [
            interestOptions[4],
            interestOptions[6],
            interestOptions[7]
        ],
        expertise: [
            expertiseOptions[4],
            expertiseOptions[1],
            expertiseOptions[2]
        ]
    },
    {
        firstName: "Jamie",
        lastName: "Lee",
        industry: industryOptions[2],
        company: "Accenture",
        position: "Software Engineering Intern",
        availability: availabilityOptions[1],
        interests: [
            interestOptions[0],
            interestOptions[2],
            interestOptions[3],
        ],
        expertise: [
            expertiseOptions[5],
            expertiseOptions[1],
            expertiseOptions[2],
        ]
    },
    {
        firstName: "Joshua",
        lastName: "Whitebell",
        industry: "Tech",
        company: "Amazon",
        position: "Software Engineering Intern",
        availability: availabilityOptions[0],
        interests: [
            interestOptions[5],
            interestOptions[7],
            interestOptions[6],
        ],
        expertise: [
            expertiseOptions[5],
            expertiseOptions[1]
        ]
    },
    {
        firstName: "Seher",
        lastName: "Sarin",
        industry: "FinTech",
        company: "Robinhood",
        position: "Product Management Intern",
        availability: availabilityOptions[6],
        interests: [
            interestOptions[1],
            interestOptions[4],
            interestOptions[6],
        ],
        expertise: [
            expertiseOptions[4],
            expertiseOptions[1]
        ]
    },
    {
        firstName: "Adhel",
        lastName: "Geng",
        industry: "FinTech",
        company: "Morgan Stanley",
        position: "Product Design Intern",
        availability: availabilityOptions[2],
        interests: [
            interestOptions[1],
            interestOptions[7],
        ],
        expertise: [
            expertiseOptions[6],
            expertiseOptions[1],
            expertiseOptions[3]
        ]
    },
];