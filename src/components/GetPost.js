import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getListPost} from "../features/post.slice"
import {Card, Col, Row} from "react-bootstrap"
const GetPost = () => {
  const post = useSelector((state) => state.post.post)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getListPost())
  },[dispatch])
  return (
    <Row className="p-2">
      <h1 className="text-center text-primary">Post list</h1>
      {post?.map((i, index) => {
         return (
          <Col md="4" key={index} className="mt-2">
            <Card className="p-2">
              <h1 className="text-center">Id: {i?.id}</h1>
              <p className="text-center">Title: {i?.title}</p>
              <p className="text-center">Content: {i?.body}</p>
            </Card>
           </Col>
        )
       })
      }
    </Row>
  )
}

export default GetPost