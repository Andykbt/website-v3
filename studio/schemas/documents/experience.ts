export const experience = {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "company",
            title: "Company name",
            type: "string",
            description: "What was the company that you worked at?"
        },
        {
            name: "role",
            title: "Job role",
            type: "string",
            description: "What was your position at this company?"
        },
        {
            name: "companyLink",
            title: "Company Link",
            type: "url",
            description: "What is the link to the company that you worked at?"
        },
        {
            name: "dateStarted",
            title: "Date started",
            type: "date",
            options: {
                dateFormat: "DD-MM-YYYY",
            }
        },
        {
            name: "dateFinished",
            title: "Date finished",
            type: "date",
            options: {
                dateFormat: "DD-MM-YYYY",
            }
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: [{ type: "block" }]
        },
    ]
};