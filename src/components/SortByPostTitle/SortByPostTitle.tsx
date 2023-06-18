import { useCallback } from "react"
import Form from "react-bootstrap/Form"
import { useAppDispatch } from "../../store/hooks"
import {
  sortTitlesPostsAscending,
  sortTitlesPostsDescending,
} from "../../store/posts/actions"

import { GET_POSTS_SAGA } from "../../store/sagas/typesForSagas"

const optionsValue = [
  {
    value: "DEF",
    text: "- Unsorted",
  },
  {
    value: "ASC",
    text: "▲ Ascending order",
  },
  {
    value: "DESC",
    text: "▼ Descending order",
  },
]

const SortByPostTitle = () => {
  const dispatch = useAppDispatch()

  const sortPosts = useCallback(
    (value: string) => {
      switch (value) {
        case "ASC":
          return dispatch(sortTitlesPostsAscending())
        case "DESC":
          return dispatch(sortTitlesPostsDescending())
        case "DEF":
          return dispatch({ type: GET_POSTS_SAGA })
        default:
          return
      }
    },
    [dispatch],
  )

  return (
    <div className="d-flex justify-content-start mb-3">
      <Form.Group controlId="formBasicSelect">
        <Form.Label className="m-0">
          <small>Post title (Sort)</small>
        </Form.Label>

        <Form.Select
          aria-label="Sort by post title"
          className="shadow -body-tertiary rounded"
          onChange={event => sortPosts(event.target.value)}
        >
          {optionsValue.map((option, idx) => (
            <option
              className="d-flex"
              key={option.value + idx}
              value={option.value}
            >
              {option.text}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  )
}

export default SortByPostTitle
