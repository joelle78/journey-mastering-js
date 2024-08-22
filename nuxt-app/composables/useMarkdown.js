// useMarkdown.js
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/themes/prism.css';

export const getMarkdownContent = (markdown) => {
    return marked(markdown);
};

export const highlightCode = () => {
    document.querySelectorAll('pre code').forEach((block) => {
        Prism.highlightElement(block);
    });
};
