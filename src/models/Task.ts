import { PriorityType, StatusType } from '../utils/enums/tasks_enum'

class TaskModel {
  id: number
  title: string
  description: string
  priority: PriorityType
  status: StatusType

  constructor(
    id: number,
    title: string,
    description: string,
    priority: PriorityType,
    status: StatusType
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.priority = priority
    this.status = status
  }
}

export default TaskModel
