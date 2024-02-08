import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IssuesContext } from "../../contexts/IssuesContext";
import { InfoPost, IssuesContainer, PostContainer, PostHeader } from "./styles";
import { useParams } from 'react-router-dom';

export function Issues(){
    
    const { issues, differenceBetweenDates } = useContext(IssuesContext)
    
    const [now, setNow] = useState(new Date());

    const { id } = useParams(); 
    const selectedIssueId = id ? parseInt(id) : null;
    const selectedIssue = issues.find((issue) => issue.id === selectedIssueId);

    //a data atual é atualizada a cada 30s
    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 30000);
      
        return () => clearInterval(interval);
    }, [])

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
                        {selectedIssue?.user?.login}
                    </div>
                    <div>
                        {differenceBetweenDates(now, new Date(selectedIssue == null? new Date() : selectedIssue?.created_at))}
                    </div>
                    <div>
                        {selectedIssue?.comments} comentários
                    </div>
                </InfoPost>
            </PostContainer>

            <div>
                {selectedIssue?.body}
            </div>
        </IssuesContainer>
    )
}