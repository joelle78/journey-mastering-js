// useMarkdown.js
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.min.js'; // Voeg andere talen toe indien nodig
import 'prismjs/components/prism-css.min.js'; // Voeg andere talen toe indien nodig
import 'prismjs/themes/prism.css'; // Voeg Prism.js CSS toe

// Zet markdown content om naar HTML
export const getMarkdownContent = (markdown) => {
    return marked(markdown);
};

// Functie om code te highlighten
export const highlightCode = () => {
    document.querySelectorAll('pre code').forEach((block) => {
        Prism.highlightElement(block);
    });
};
