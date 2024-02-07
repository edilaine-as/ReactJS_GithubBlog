import { useContext } from "react";
import { Link } from "react-router-dom";
import { IssuesContext } from "../../contexts/IssuesContext";
import { InfoPost, IssuesContainer, PostContainer, PostHeader } from "./styles";
import { useParams } from 'react-router-dom';

export function Issues(){
    const { issues } = useContext(IssuesContext)
    const { id } = useParams();
    const selectedIssueId = id ? parseInt(id) : null;

    const selectedIssue = issues.find((issue) => issue.id === selectedIssueId);

    return (
        <IssuesContainer>
            <PostContainer>
                <PostHeader>
                    <Link to="/">Voltar</Link>
                    <Link to={selectedIssue?.html_url ?? '/'} target="_blank">Ver no GitHub</Link>
                </PostHeader>
                <h2>{selectedIssue?.title}</h2>
                <InfoPost>
                    <div>
                        usuario
                    </div>
                    <div>
                        Há 1 dia
                    </div>
                    <div>
                        5 comentários
                    </div>
                </InfoPost>
            </PostContainer>
        </IssuesContainer>
    )
}