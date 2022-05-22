const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const tabsHeader = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          tabsContent = document.querySelectorAll(contentSelector);
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsHeader.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabSelector.replace(/\./, '')) || target && target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tabs.forEach((tab, i) => {
                if (tab === target || target.parentNode === tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
            
        }
    });
};

export default tabs;