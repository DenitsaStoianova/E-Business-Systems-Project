export interface BoughtWorkspace {
    name: string,
    department: string,
    maxPeople: number,
    usersEmails: Array<string>,
    templates: [{
        type: number,
        ref: 'templates'
    }]
}