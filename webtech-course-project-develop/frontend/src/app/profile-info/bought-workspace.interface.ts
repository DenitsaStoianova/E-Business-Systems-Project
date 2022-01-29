import { Template } from "src/interfaces/template.interface";

export interface BoughtWorkspace {
    name: string,
    department: string,
    maxPeople: number,
    usersEmails: Array<string>,
    templates: Array<Template>
}