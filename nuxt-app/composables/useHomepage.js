import { useFetch } from '#imports';

export async function useHomepage() {
    const { data, pending, error } = await useFetch('https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clzl89xpl004x07uzqbncmuls/master', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
        query homepage {
          homepages {
            introHomePage
          }
        }
      `
        })
    });

    const homepage = data.value?.data?.homepages[0];

    return { homepage, pending, error };
}
