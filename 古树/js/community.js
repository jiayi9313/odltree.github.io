document.addEventListener('DOMContentLoaded', () => {
    // 获取元素
    const commentInput = document.getElementById('comment-input');
    const submitButton = document.getElementById('submit-comment');
    const commentsList = document.getElementById('comments-ul');

    // 提交评论
    submitButton.addEventListener('click', async () => {
        const commentText = commentInput.value.trim();
        if (commentText === '') {
            alert('评论不能为空！');
            return;
        }

        // 发送评论到后端
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: commentText })
        });

        if (response.ok) {
            // 清空输入框
            commentInput.value = '';
            // 刷新评论列表
            loadComments();
        } else {
            alert('评论提交失败，请稍后再试！');
        }
    });

    // 加载评论列表
    async function loadComments() {
        const response = await fetch('/api/comments');
        if (response.ok) {
            const comments = await response.json();
            commentsList.innerHTML = '';
            comments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment.comment;
                commentsList.appendChild(li);
            });
        } else {
            commentsList.innerHTML = '<li>加载评论失败，请稍后再试！</li>';
        }
    }

    // 页面加载时加载评论
    loadComments();
});