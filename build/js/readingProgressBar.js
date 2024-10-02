function updateProgressBar() {
    const { scrollTop, scrollHeight } = document.documentElement
    const scrollPercent =
        (scrollTop / (scrollHeight - window.innerHeight)) * 100 + '%'
    document
        .querySelector('#reading-bar')
        .style.setProperty('--progress', scrollPercent)
}

document.addEventListener('scroll', updateProgressBar)