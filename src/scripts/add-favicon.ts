export function addFavicon() {
    const favicon = document.createElement('link')
    favicon.rel = 'icon'
    favicon.href = 'leaf.png'
    document.head.appendChild(favicon)
}