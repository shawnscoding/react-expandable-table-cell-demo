import React from 'react'
import { ExpandableInput } from 'react-editable-cell'
import 'react-editable-cell/dist/index.css'

const Form = () => {
  const [form, setForm] = React.useState({
    expandableField: 'hello world'
  })

  const onChange = (args) => {
    const { name, value } = args
    setForm({
      [name]: value
    })
  }

  const onBlur = (args) => {
    const { name, value } = args
    setForm({
      [name]: value
    })
  }
  return (
    <form>
      <ExpandableInput
        name='expandableField'
        id='123'
        initialValue={form.expandableField}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={false}
      />
    </form>
  )
}

export default Form
