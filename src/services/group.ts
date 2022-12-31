import instance from '@/services/instance'

export const leaveGroup = async (groupId: number) => {
  return instance.delete(`/group/${groupId}`)
}

export const getAllGroup = async () => {
    return instance.get('/group/all')
}

export const getGroupByActivity = async (activityId: number) => {
    return instance.get(`/group/ByActivityID/${activityId}`)
}

export const getGroupByPracticeID = async (practiceId: number) => {
    return instance.get(`/group/ByPracticeID/${practiceId}`)
}

export const joinGroup = async (groupId: number) => {
    return instance.post('/group/join', {
        groupID: groupId
    })
}

export const getMyGroup = async () => {
    return instance.get('/group/my')
}

export const getTeacherGroup = async (practiceId: number) => {
    return instance.get('/group/teacherGroup/' + practiceId)
}

export const renameGroup = async (groupId: number, name: string) => {
    return instance.put('/group/rename', {
        groupID: groupId,
        groupName: name
    })
}

export const scoreGroup = async (groupId: number, score: number) => {
    return instance.put('/group/score', {
        groupID: groupId,
        score: score
    })
}
