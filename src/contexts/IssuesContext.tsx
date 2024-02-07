import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
    id: number;
    title: string;
    body: string;
    created_at: string;
}

interface IssueContextType {
    issues: Issue[]
    totalPosts: number
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

    async function fetchIssuesRepository(){
        await api.get('search/issues', {
            params: {
                q: 'repo:daltonmenezes/test'
            }
        })
        .then(response => {
            setTotalPosts(response.data.total_count);

            const newCards = response.data.items.map((itemResponse: Issue) => ({
                id: itemResponse.id,
                title: itemResponse.title,
                body: itemResponse.body,
                created_at: itemResponse.created_at,
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
            totalPosts
          }}
        >
          {children}
        </IssuesContext.Provider>
    )
}