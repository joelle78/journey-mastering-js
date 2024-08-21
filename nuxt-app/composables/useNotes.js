const API_URL = `${import.meta.env.VITE_APP_GQL_HOST}`;
const API_TOKEN = `${import.meta.env.VITE_APP_API_TOKEN}`; // Vervang dit door je eigen API-token

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
