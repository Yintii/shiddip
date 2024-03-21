document.addEventListener("turbo:load", function() {
    const alert = document.querySelector('.alert');
    const notice = document.querySelector('.notice');
    if (notice.innerHTML !== "") {
        notice.classList.remove('hide');
        setTimeout(() => {
        notice.classList.add('hide');
        }, 3000);
    }else if (alert.innerHTML !== "") {
        alert.classList.remove('hide');
        setTimeout(() => {
        alert.classList.add('hide');
        }, 3000);   
    }   
});
