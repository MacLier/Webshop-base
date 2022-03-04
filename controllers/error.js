
exports.getPageNotFound = (req, res, next) => {
    res.render('pageNotFound', { pageTitle: 'Page Not Found!' })
};


exports.getErrorPage = (req, res, next) => {
    res.status('500').render('500', {
        pageTitle: 'Page Not Found!',
        path: '/500',
    })
}