// 登录逻辑
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('登录成功！');
        window.location.href = 'index.html'; // 登录成功后跳转到首页
    } else {
        alert('登录失败，请检查用户名和密码！');
    }
});

// 注册逻辑
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('两次输入的密码不一致！');
        return;
    }

    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('注册成功！');
        window.location.href = 'login.html'; // 注册成功后跳转到登录页面
    } else {
        alert('注册失败，用户名可能已被占用！');
    }
});


document.querySelector('.floating-window-toggle-btn').addEventListener('click', function() {
    document.querySelector('.floating-window').style.display = 'block';
});

document.querySelector('.floating-window').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

const editButtons = document.querySelectorAll('.edit-btn');

// 为每个编辑按钮添加点击事件
document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit-btn');

    editButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tooltipId = this.getAttribute('data-id'); // 获取对应的 tooltip ID
            const tooltip = document.querySelector(`.tooltip[data-id="${tooltipId}"]`); // 找到对应的 tooltip 元素

            // 创建一个可编辑的文本区域
            const textarea = document.createElement('textarea');
            textarea.value = tooltip.textContent; // 设置初始值为当前 tooltip 的内容
            textarea.style.width = '100%';
            textarea.style.height = '100px';
            textarea.style.boxSizing = 'border-box';
            textarea.style.marginTop = '10px';

            // 替换 tooltip 为文本区域
            tooltip.parentNode.insertBefore(textarea, tooltip.nextSibling);
            tooltip.style.display = 'none'; // 隐藏原来的 tooltip

            // 添加保存按钮
            const saveBtn = document.createElement('button');
            saveBtn.textContent = '保存';
            saveBtn.style.marginTop = '10px';
            saveBtn.style.display = 'block';
            saveBtn.style.width = '100px';
            saveBtn.style.marginLeft = 'auto';
            saveBtn.style.marginRight = 'auto';

            // 保存按钮点击事件
            saveBtn.addEventListener('click', function () {
                // 更新 tooltip 内容
                tooltip.textContent = textarea.value;
                tooltip.style.display = 'block'; // 显示 tooltip
                textarea.remove(); // 移除文本区域
                saveBtn.remove(); // 移除保存按钮
            });

            // 将保存按钮添加到页面
            tooltip.parentNode.insertBefore(saveBtn, tooltip.nextSibling);
        });
    });
});