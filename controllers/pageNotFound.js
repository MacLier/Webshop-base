
exports.getPageNotFound = (req, res, next) => {
    res.render('pageNotFound', { pageTitle: 'Page Not Found!', isAuthenticated: req.isLoggedIn })
}