export enum AppActions {
  INIT_APP_DATA = "INIT_APP_DATA"
}

export const appActions = {
  initAppData: () => ({
    type: AppActions.INIT_APP_DATA
  })
};
