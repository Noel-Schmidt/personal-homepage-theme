export {}

declare global {
    interface GitProject {
        full_name: string;
        html_url: string;
        description: string;
        language: string;
    }

    interface GitUser {
        public_repos: number;
        followers: number;
        following: number;
    }

    interface PostData {
        id: number,
        attributes: {
            title: string;
            short_text: string;
            content: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            author: string;
            keywords: string;
            cover: object
        }
    }

}
