document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('blogSearchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const blogPosts = document.querySelectorAll('.blogPost');

    function filterBlogPosts() {
        const searchValue = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value;

        blogPosts.forEach(post => {
            const title = post.querySelector('h3').innerText.toLowerCase();
            const preview = post.querySelector('p[data-i18n*="preview"]').textContent.toLowerCase();
            const category = post.getAttribute('data-category');

            const matchesSearch = title.includes(searchValue) || preview.includes(searchValue);

            const matchesCategory = categoryValue === "" || category === categoryValue;

            if (matchesSearch && matchesCategory) {
                post.style.display = "";
            } else {
                post.style.display = "none";
            }
        });
    }

    searchInput.addEventListener('input', filterBlogPosts);
    categoryFilter.addEventListener('change', filterBlogPosts);
});