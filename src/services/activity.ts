import instance from '@/services/instance'

export const createActivity = async (activityName: string, practiceId: number) => {
    return instance.post('/activity', {
        'activityName': activityName,
        'practiceID': practiceId
    })
}

export const deleteActivity = async (activityId: number) => {
    return instance.delete(`/activity/${activityId}`)
}

export const getAllActivities = async () => {
    return instance.get('/activity/all')
}

export const getActivityByPracticeId = async (practiceId: number) => {
    return instance.get(`/activity/ByPracticeID/${practiceId}`)
}

export const endActivity = async (activityId: number) => {
    return instance.put(`/activity/end/${activityId}`)
}

export const joinActivity = async (activityId: number) => {
    return instance.post(`/activity/join/${activityId}`)
}

export const renameActivity = async (activityId: number, activityName: string) => {
    return instance.put('/activity/rename', {
        'activityID': activityId,
        'activityName': activityName
    })
}

export const getActivityState = async (activityId: number) => {
    return instance.get(`/activity/state/${activityId}`)
}
