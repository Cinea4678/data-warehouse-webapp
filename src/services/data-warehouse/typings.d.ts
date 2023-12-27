declare namespace API {
  type Movie = {
    productId: string
    commentCounts: string
    cost: string
    format: string
    grade: string
  }

  type QueryResult<T> = {
    id: string
    success: boolean
    data: T
    modelName: string[]
    modelTime: number[]
    modelLog: string[]
  }

  type DACooperate = {
    directorName: string
    actorName: string
    collaborationNumber: number
  }

  type DDCooperate = {
    directorName1: string
    directorName2: string
    collaborationNumber: number
  }

  type AACooperate = {
    actorName1: string
    actorName2: string
    collaborationNumber: number
  }

  type HotAA = {
    actorName1: string
    actorName2: string
  }

  type NonMovie = {
    nonMovieDataCount: number
  }

  type HarryPotter = {
    harryPotterMovieCount: number
    formatCount: number
    webPageCount: number
    mergedWebPageCount: number
  }
}
