interface GblI {
  readonly baseURL: string;
  readonly serverURL: string;
  readonly chatServerURL: string;
}
export const globalConstant: GblI = {
  // //? auth 0 checks below base url before sending request
  //*for development
  // serverURL: 'http://localhost:5000',
  serverURL: 'https://hexgrade.herokuapp.com/',
  //*for production
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://portfoliosite.me',
  //? chatserver
  //*for development
  // chatServerURL: 'http://localhost:5050',
  //*for production
  chatServerURL: 'https://deer-portfolio-chatserver.herokuapp.com',
};
