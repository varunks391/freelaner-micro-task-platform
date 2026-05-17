
function CreateTask() {
  return (
    <div>
      <h1>Create Task</h1>
      <input type="text" placeholder="Task Title" /><br/><br/>
      <textarea placeholder="Description"></textarea><br/><br/>
      <input type="number" placeholder="Budget" /><br/><br/>
      <button>Post Task</button>
    </div>
  )
}

export default CreateTask
