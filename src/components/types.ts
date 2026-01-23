// types.ts
export type BlogBlock =
    | {
        type: "heading";
        text: string;
    }
    | {
        type: "paragraph";
        text: string;
    }
    | {
        type: "list";
        items: string[];
        ordered?: boolean;
    };

export interface BlogPost {
    slug: string;
    title: string;
    coverImage: string;
    date: string;
    author: string;
    content: BlogBlock[];
}
