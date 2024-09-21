document.getElementById('send-btn').addEventListener('click', function() {
    const comment = document.getElementById('anon-text').value;
    
    if (comment.trim() !== "") {
        const commentSection = document.getElementById('comment-section');
        const newComment = document.createElement('p');
        newComment.textContent = comment;
        commentSection.appendChild(newComment);

        // Clear the textarea after submission
        document.getElementById('anon-text').value = "";
    } else {
        alert("Komentar tidak boleh kosong!");
    }
});