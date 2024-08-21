import {useFetch} from '#imports';

export async function useChallenges() {
    const {
        data, pending, error
    } = await useFetch(`${import.meta.env.VITE_APP_GQL_HOST}`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            query: `
                query MyQuery {
                   challenge {
                      challengeOne
                      challengeTwo
                      challengeThree
                         }
                       }
                    `
        })
    });

    const challenges = data.value?.data?.challenge || [];

    return {challenges, pending, error};
}
