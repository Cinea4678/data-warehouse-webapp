import { PageContainer, ProForm, ProFormInstance } from '@ant-design/pro-components'
import { Alert, Card, Col, Empty, Row, Statistic } from 'antd'
import { useRef, useState } from 'react'
import QueryResult from '@/components/QueryResult/QueryResult'
import QueryLog from '@/components/QueryResult/QueryLog'
import { queryQuality } from '@/services/data-warehouse/api'

type QueryParam = object

export default function Quality() {
  const formRef = useRef<ProFormInstance<QueryParam>>()

  const [queryResult, setQueryResult] = useState<API.QueryResult<API.QualityData> | null>(null)

  const query = async () => {
    const resp = await queryQuality()
    if (resp.success) {
      setQueryResult(resp)
    }
  }

  return (
    <PageContainer>
      <div className={'flex flex-col gap-5'}>
        <Card>数据质量信息：我们在处理过程中遇到了多少空数据和无效数据</Card>
        <Card>
          <ProForm<QueryParam> formRef={formRef} onFinish={query} autoFocusFirstInput>
            <ProForm.Group title={'查询参数'}>
              <div className={'my-3'}>本次查询无需输入参数</div>
            </ProForm.Group>
          </ProForm>
        </Card>

        {(queryResult !== null && (
          <>
            <Alert message="查询成功" type="success" showIcon />

            <QueryResult result={queryResult}>
              <div className={'py-3'}>
                <Row>
                  <Col span={12}>
                    <Statistic title="总产品数目" value={queryResult.data.totalProducts} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="总电影数目" value={queryResult.data.totalMovies} />
                  </Col>
                  <Col span={12}></Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Statistic title="价格空值数量" value={queryResult.data.costNulls} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="价格空值占比" value={queryResult.data.costNullRate.toFixed(4)} suffix={'%'} />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Statistic title="评价数量属性空值个数" value={queryResult.data.commentsNulls} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="评论数量属性空值占比" value={queryResult.data.commentsNullRate.toFixed(4)} suffix={'%'} />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Statistic title="版本属性空值个数" value={queryResult.data.formatNulls} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="版本属性空值占比" value={queryResult.data.formatNullRate.toFixed(4)} suffix={'%'} />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Statistic title="类型属性空值个数" value={queryResult.data.typeNulls} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="类型属性空值占比" value={queryResult.data.typeNullRate.toFixed(4)} suffix={'%'} />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Statistic title="评分属性空值个数" value={queryResult.data.gradeNulls} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="评分属性空值占比" value={queryResult.data.gradeNullRate.toFixed(4)} suffix={'%'} />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Statistic title="时长属性空值个数" value={queryResult.data.timeNulls} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="时长属性空值占比" value={queryResult.data.timeNullRate.toFixed(4)} suffix={'%'} />
                  </Col>
                </Row>
              </div>
            </QueryResult>

            <QueryLog result={queryResult} />
          </>
        )) || (
          <Card>
            <Empty description="在您获得结果后，会显示在这里" />
          </Card>
        )}
      </div>
    </PageContainer>
  )
}
