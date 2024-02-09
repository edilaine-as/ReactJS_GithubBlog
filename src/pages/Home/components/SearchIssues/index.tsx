import { IssuesContext } from "../../../../contexts/IssuesContext"
import { useContext } from "react"
import { SearchContainer } from "./styles"

export function SearchIssues(){
    const { totalPosts } = useContext(IssuesContext)

    return (
        <SearchContainer>
            <div>
                <h3>Publicações</h3>
                <span>{totalPosts} Publicações</span>
            </div>
            <input type="text" placeholder="Buscar conteúdo" />
        </SearchContainer>
    )
}