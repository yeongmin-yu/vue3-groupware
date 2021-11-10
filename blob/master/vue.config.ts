module.exports = {
    chainWebpack: config =>{
        config.plugin.delete('prefetch'); //prefetch 삭제 (lazyload)
    }
}