document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.app-view');

    // View Switching Logic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-view');

            // Update Active Nav
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Show Target View
            views.forEach(view => {
                const viewId = view.getAttribute('id');
                if (viewId === `view-${target}`) {
                    view.style.display = 'grid';
                    // Trigger a small animation
                    view.style.opacity = '0';
                    view.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        view.style.opacity = '1';
                        view.style.transform = 'translateY(0)';
                        view.style.transition = 'all 0.4s ease';
                    }, 50);
                } else {
                    view.style.display = 'none';
                }
            });

            // Re-render MathJax
            if (window.MathJax) {
                window.MathJax.typesetPromise();
            }
        });
    });

    // Add hover effects for roadmap items
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.borderColor = 'var(--primary)';
            item.style.boxShadow = '0 5px 15px rgba(192, 132, 252, 0.1)';
        });
        item.addEventListener('mouseout', () => {
            item.style.borderColor = 'transparent';
            item.style.boxShadow = 'none';
        });
    });
});
