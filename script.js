document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. 处理按钮激活状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. 获取当前的过滤值
            const filterValue = button.getAttribute('data-filter');

            // 3. 过滤逻辑
            workItems.forEach(item => {
                if (filterValue === 'all') {
                    // 显示所有
                    item.style.display = 'block';
                } else if (item.classList.contains(filterValue)) {
                    // 如果项目包含该类名，显示
                    item.style.display = 'block';
                } else {
                    // 否则隐藏
                    item.style.display = 'none';
                }
            });
        });
    });
});