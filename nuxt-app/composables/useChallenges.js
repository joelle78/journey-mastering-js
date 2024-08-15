import {useFetch} from '#imports';

export async function useChallenges() {
    const {
        data, pending, error
    } = await useFetch('https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clzl89xpl004x07uzqbncmuls/master', {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            query: `
                query MyQuery {
                   challenge {
                      challengeOne
                      challengeTwo
                         }
                       }
                    `
        })
    });

    const challenges = data.value?.data?.challenge || [];

    return {challenges, pending, error};
}
