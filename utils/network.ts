import { Page } from "playwright";

class NetworkUtils {
  static waitForGraphQLCall(page: Page, graphQLCall: string) {
    return page.waitForRequest((request) => {
      const isGraphQLRequest = request.url().endsWith('graphql') && request.method() === "POST";
      const hasGraphQLQuery = request.postData()?.includes(graphQLCall);
      return isGraphQLRequest && !!hasGraphQLQuery;
    });
  }

  static waitForAnalyticsCall(page: Page, analyticsQS: string, tId: string) {
    return page.waitForRequest((request) => {
      const isAnalyticsRequest = request.method() === "POST" && request.url().includes(analyticsQS) && request.url().includes(tId);
      return isAnalyticsRequest;
    });
  }

  static waitForTrackingCall(page: Page, trackingCall: string) {
    return page.waitForRequest((request) => {
      const isAnalyticsRequest = request.method() === "POST" && request.url().includes(trackingCall);
      return isAnalyticsRequest;
    });
  }
}

export default NetworkUtils;