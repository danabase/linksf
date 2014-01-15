function trackDetailsAction(action) {
  Parse.Analytics.track('detailsPageAction', { action: action });
}

function trackHomepageAction(searchTerm, category) {
  var dimensions = {};
  if (searchTerm) {
    dimensions.action = 'search';
  } else {
    dimensions.action   = 'category';
    dimensions.category = category;
  }
  Parse.Analytics.track('homePageAction', dimensions);
}

function trackRoute(route) {
  Parse.Analytics.track('visit', { page: route, platform: window.navigator.platform, userAgent: window.navigator.userAgent });
}

function trackQuery(params) {
  _.keys(params).forEach(function(k) {
    if (_.isEmpty(params[k])) { delete params[k]; }
  });
  if (!_.isEmpty(params)) { Parse.Analytics.track('query', params); }
}

module.exports = {
  trackDetailsAction:  trackDetailsAction,
  trackHomepageAction: trackHomepageAction,
  trackRoute:          trackRoute,
  trackQuery:          trackQuery
};