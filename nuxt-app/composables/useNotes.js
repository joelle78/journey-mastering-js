const API_URL = 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clzl89xpl004x07uzqbncmuls/master';
const API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MjQxNTMxNjQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2x6bDg5eHBsMDA0eDA3dXpxYm5jbXVscy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiNzRkNTc2ODUtMDQ3ZC00ZGFlLWEwZWYtN2ZlNzE3ZjZkYTI3IiwianRpIjoiY20wMmNhMGN2MDZleDA3dXhmc2w5YTRvOSJ9.Tz8k3G9_Ym8yux3Ud_piHpsWgCYSCRQLBvDFjPJUYaHhad7qDM2TMtRzSUWa7I5xkUWmwqbvmIMUYagHYkmZwMjC_S1hsbdY4uZx2hP2w347TVqkGBDmJJUiLUI5WHeZRIvamMfnKYDklT_Rl7HlGFHl664jbuQ67_Tu5Asm6IuYSWkQ_qWBLO80EhTeAVg8R-fXP260kOANk-Cyrw54m9zKhrMhgdMaGxZroiEP-xqA_Lva4Ko_lnr7sXhRXsH_iHRrWB8ZZnDHhUfVtRtYFcNZkUGWAYRhFRHbLi-Mu8PlvM07O07JJomqUlvSyLelxkmeFEA8chpw3dVSHqbVyVU-Ym8NLFUbqilo8vCWokftEi0SDZd70ntV1mPwAFfbzEhG-6GUKybD0b4UCPxD1keCXt2VbJJX5_FR05zOngpJTxp9mxqOL2oofU_MdJO9ji6t1DyK0h-KpHZg1EozTBfhSa2omq53FIGVAGM1H1vUbISSb_zKg1JDWi7vkHUnsVM2jxNerBgYJQS_zLFsgVnVkLUlm-zR9tNRuJdMYSYUbvbL0DDX7Sv0W2XTHjGeK9g9GLUYl0fI7hA5n6oDMgqCrsvzZcoBQm5twOuXyayinPP5pj1P582e7q5rjLGhUgtRHfEO8sFaS06qaxMzgmc80KCCueSKiYXSXG8v3n4'; // Vervang dit door je eigen API-token

async function fetchGraphQL(query, variables = {}) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables }),
        });

        const result = await response.json();
        if (result.errors) {
            throw new Error(result.errors.map(error => error.message).join('\n'));
        }

        return result.data;
    } catch (error) {
        console.error('GraphQL fetch error:', error);
        throw error;
    }
}

export async function createNote(subject, comment) {
    const createQuery = `
    mutation CreateNote($subject: String!, $comment: String!) {
      createNotes(data: {subject: $subject, comment: $comment}) {
        id
        subject
        comment
      }
    }
    `;

    const publishQuery = `
    mutation PublishNote($id: ID!) {
      publishNotes(where: {id: $id}) {
        id
        subject
        comment
      }
    }
    `;

    const variables = { subject, comment };

    // Stap 1: Create Note
    const createResult = await fetchGraphQL(createQuery, variables);
    const noteId = createResult.createNotes.id;

    // Stap 2: Publish Note
    const publishResult = await fetchGraphQL(publishQuery, { id: noteId });
    console.log('Published note:', publishResult);

    return publishResult.publishNotes;
}

export async function getNotes() {
    const query = `
    query MyQuery {
      note {
        id
        subject
        comment
      }
    }
    `;

    const result = await fetchGraphQL(query);
    console.log('Fetched notes:', result);
    return result.note; // Zorg ervoor dat je de juiste data retourneert
}
