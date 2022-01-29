import {Workspace} from "../workspaces/workspace.interface";

export interface User {
    name: string;
    email: string;
    boughtWorkspaces: Workspace
}
