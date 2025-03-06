document.querySelectorAll('.highlight-tools').forEach(toolbar => {
  // 创建全屏按钮
  const fullscreenBtn = document.createElement('i');
  fullscreenBtn.className = 'fas fa-expand fullscreen-btn';
  fullscreenBtn.title = '全屏';
  
  // 插入到工具栏
  toolbar.appendChild(fullscreenBtn);
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('fullscreen-btn')) {
    const codeBlock = e.target.closest('.highlight');
    const icon = e.target;
    
    if (!document.fullscreenElement) {
      // 进入全屏
      codeBlock.requestFullscreen().then(() => {
        icon.classList.replace('fa-expand', 'fa-compress');
        icon.title = '退出全屏';
      }).catch(err => {
        alert(`全屏失败：${err.message}`);
      });
    } else {
      // 退出全屏
      document.exitFullscreen().then(() => {
        icon.classList.replace('fa-compress', 'fa-expand');
        icon.title = '全屏';
      });
    }
  }
});