document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.sidebarItem');
  const panes = document.querySelectorAll('.pane');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.dataset.target;

      // Xoá active ở tất cả item & pane
      menuItems.forEach(i => i.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      // Thêm active đúng mục được chọn
      item.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
});