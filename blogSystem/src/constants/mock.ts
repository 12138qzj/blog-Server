interface IlabelTab {
  id: number,
  name: string,
  key: string
}

const labelTab: Array<IlabelTab> = [
    {
      id: 1,
      name: '推荐',
      key:'recommend',
    },
    {
      id: 2,
      name: '后端',
      key:'RD',
    },
    {
      id: 3,
      name: '前端',
      key:'FE',
    },
    {
      id: 4,
      name: 'Android',
      key:'Android',
    },
    {
      id: 5,
      name: 'iOS',
      key:'iOS',
    },
    {
      id: 6,
      name: '开发工具',
      key:'tool',
    }
]

export { labelTab }