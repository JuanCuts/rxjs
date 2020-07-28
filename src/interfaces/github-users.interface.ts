import { GithubUser } from "./github-user.interface";
export interface GithubUsersRes {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}