import { Col, Row, Typography } from 'antd'
import { FC } from 'react'
import BannerImg from '@/assets/bg/Mehram-group.png'

const HomeContainer: FC = () => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Typography className='text-2xl'>
                        Content
                    </Typography>
                </Col>
                <Col span={12}>

                    <img src={BannerImg} alt="mehram group pic"/>
                </Col>
            </Row>
        </>
    )
}

export default HomeContainer