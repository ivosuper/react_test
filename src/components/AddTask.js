import { useState } from 'react'

const AddTask = ( { onAdd } ) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
      alert('Моля попълнете задачата')
      return
    }
    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit} >
      <div className='form-control'>
      <label>Задача</label>
      <input type='text' placeholder='Добави Задача' value={text} onChange={(e) => setText(e.target.value) } />
      </div>
      <div className='form-control'>
      <label>Ден и час</label>
      <input type='text' placeholder='Добави ден и час' value={day} onChange={(e) => setDay(e.target.value) } />
      </div>
      <div className='form-control form-control-check'>
      <label>Напомняне</label>
      <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) } />
      </div>

      <input type='submit' value='Запази Задачата' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
