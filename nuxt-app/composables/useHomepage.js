import { ref } from 'vue';

export function useHomepage() {
    const homepage = ref(null);
    const pending = ref(true);
    const error = ref(null);

    async function fetchHomepage() {
        try {
            const response = await fetch('https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clzl89xpl004x07uzqbncmuls/master', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                        query homepage {
                            homepages {
                                introHomePage
                                parIntroPage
                            }
                        }
                    `
                })
            });
            const result = await response.json();
            console.log('API Response:', result);  // Controleer de API-response
            homepage.value = result.data.homepages[1];  // Selecteer de tweede item
        } catch (err) {
            console.error('Error fetching homepage data:', err);  // Foutafhandeling
            error.value = err;
        } finally {
            pending.value = false;
        }
    }

    fetchHomepage();

    return { homepage, pending, error };
}
