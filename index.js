if (module.hot) {
    module.hot.dispose(() => {
        window.location.reload()
    })
}

(async () => {
    var node = document.querySelector('main')
    var module = await import('./src/Main.elm')
    module.Elm.Main.init({ node })
})()
