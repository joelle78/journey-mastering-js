import { ref } from 'vue';

export function useHomepage() {
    const homepage = ref(null);
    const pending = ref(true);
    const error = ref(null);

    async function fetchHomepage() {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_GQL_HOST}`, {
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
            console.log('API Response:', result);
            homepage.value = result.data.homepages[1];  // Selecteer de tweede item
        } catch (err) {
            console.error('Error fetching homepage data:', err);
            error.value = err;
        } finally {
            pending.value = false;
        }
    }

    fetchHomepage();

    return { homepage, pending, error };
}
