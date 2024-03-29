import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
    id: number;
    title: string;
    body: string;
    html_url: string;
    created_at: Date;
    comments: number;
    user: {
        login: string;
    };
}

interface IssueContextType {
    issues: Issue[]
    totalPosts: number
    fetchIssuesRepository: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
    children: ReactNode
}

export const IssuesContext = createContext<IssueContextType>(
    {} as IssueContextType,
)

export function IssuesProvider({ children }: IssuesProviderProps) {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [totalPosts, setTotalPosts] = useState(0);
    
    async function fetchIssuesRepository(query?:string){
        const url = query !== undefined? query + ' ' + 'repo:daltonmenezes/test' : 'repo:daltonmenezes/test'
        await api.get('search/issues', {
            params: {
                q: url
            }
        })
        .then(response => {
            setTotalPosts(response.data.total_count);

            const newCards = response.data.items.map((itemResponse: Issue) => ({
                id: itemResponse.id,
                title: itemResponse.title,
                body: itemResponse.body,
                html_url: itemResponse.html_url,
                created_at: new Date(itemResponse.created_at),
                user: {
                    login: itemResponse.user.login
                },
                comments: itemResponse.comments,
            }));

            setIssues(newCards);
        })
    }

    useEffect(() => {
        fetchIssuesRepository()
    }, [])

    return (
        <IssuesContext.Provider
          value={{
            issues,
            totalPosts,
            fetchIssuesRepository
          }}
        >
          {children}
        </IssuesContext.Provider>
    )
}