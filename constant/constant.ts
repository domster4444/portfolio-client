interface GblI {
  readonly baseURL: string;
  readonly serverURL: string;
  readonly chatServerURL: string;
}
export const globalConstant: GblI = {
  // //? auth 0 checks below base url before sending request
  //*for development
  // baseURL: 'http://localhost:3000',
  // serverURL: 'http://localhost:5000',
  //*for production
  baseURL: 'https://www.portfoliosite.me',
  //? chatserver
  //*for development
  // chatServerURL: 'http://localhost:5050',
  //*for production
  chatServerURL: 'https://deer-portfolio-chatserver.herokuapp.com',
};
