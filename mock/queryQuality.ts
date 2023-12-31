import { Request, Response } from 'express'

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

const getNonMovie = async (req: Request, res: Response) => {
  await waitTime(1000)

  const year = req.query['year']

  res.json({
    data: {
      costNullRate: 0.0005897165232672655,
      totalMovies: 110855,
      costNulls: 1,
      commentsNullRate: 6.2055869743414345,
      formatNullRate: 0.07548371497820998,
      typeNullRate: 0.46366875648369493,
      commentsNulls: 10523,
      formatNulls: 128,
      totalProducts: 169573,
      gradeNulls: 25593,
      typeNulls: 514,
      gradeNullRate: 15.092614979979125,
      timeNullRate: 9.010870055477877,
      timeNulls: 9989,
    },
    id: '1',
    success: true,
    modelName: ['关系型-mysql', '关系型-hive', '图数据库'],
    modelTime: [0, 0, 0],
    modelLog: ['无', '无', '无'],
  } satisfies API.QueryResult<API.QualityData>)
}
export default {
  'GET /api/quality': getNonMovie,
}
