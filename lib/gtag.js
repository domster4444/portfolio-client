// !_____________________Google Analytics_____________________
// ?? GET GA TRACKING ID FROM WEBSITE https://analytics.google.com/ ,
// ?? after creating account, the "MeasurementId" is itself "UA-XXXXXXXX-X" is our GA_Track_ID
//  ?? remember to choose "web" as the tracking type
export const GA_TRACKING_ID = 'G-KNWDXGBQSS';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
