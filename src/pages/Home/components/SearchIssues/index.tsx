import { IssuesContext } from "../../../../contexts/IssuesContext"
import { useContext } from "react"
import { SearchContainer } from "./styles"

export function SearchIssues(){
    const { totalPosts, fetchIssuesRepository } = useContext(IssuesContext)

    return (
        <SearchContainer>
            <div>
                <h3>Publicações</h3>
                <span>{totalPosts} Publicações</span>
            </div>
            <input type="text" placeholder="Buscar conteúdo" 
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        const target = e.target as HTMLTextAreaElement
                        const inputValue = target.value;
                        fetchIssuesRepository(inputValue);
                    }
                }}
            />
        </SearchContainer>
    )
}