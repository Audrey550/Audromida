document.addEventListener('DOMContentLoaded', () => {
    const latestBlogContainer = document.getElementById('latestBlog'); 
    if (!latestBlogContainer) return;

    fetch('blog.html')
        .then(response => response.text())
        .then(htmlstring => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlstring, 'text/html');

            const firstPost = doc.querySelector('.blogPost');
            if (firstPost) {
                const titleKey = firstPost.querySelector('h3').getAttribute('data-i18n') || '';
                const previewKey = firstPost.querySelector('[data-i18n*="preview"]')?.getAttribute('data-i18n') || '';
                const date = firstPost.querySelector('.date')?.innerText || '';
                const link = firstPost.querySelector('a')?.getAttribute('href') || 'blog.html';

                latestBlogContainer.innerHTML = `
                    <h2 data-i18n="blog.title">My Blog</h2>
                    <article class="blogPreview">
                        <h3 data-i18n="${titleKey}"></h3>
                        <p class="date">${date}</p>
                        <p data-i18n="${previewKey}"></p>
                        <a href="${link}" data-i18n="blog.readMore">Read More</a><br> 
                        <a href="blog.html" data-i18n="blog.goToPage">View all blog posts</a>
                    </article>
                `;

                //Pas vertalingen toe op de blog preview
                if (typeof applyTranslations === 'function' && window.currentTranslations) {
                    applyTranslations(window.currentTranslations);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching blog preview:', error);
    });
});