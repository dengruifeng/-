// common 整体上的仓库 reducer
const defaultState = {
  menus: [
    { id: 1, name: '查询提交', icon: 'search', href: '/' },
    { id: 2, name: '代理管理', icon: 'user', href: '/agentMsg' },
    { id: 2, name: '日志管理', icon: 'pie-chart', href: '/logMsg' }
  ],
  defaultMenus: ['1'], // 默认选择的菜单项目
}
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    default:
      break;
  }

  return newState;
}
