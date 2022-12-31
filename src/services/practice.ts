import instance from '@/services/instance'

export const createPractice = async (practiceName: string) => {
    return instance.post('/practice', practiceName)
}

export const getAllPractice = async () => {
    return instance.get('/practice/all')
}

export const deletePractice = async (practiceId: number) => {
    return instance.delete(`/practice/${practiceId}`)
}

export const endPractice = async (practiceId: number) => {
    return instance.put(`/practice/end/${practiceId}`)
}

export const joinPractice = async (practiceId: number, groupName: string) => {
    return instance.post('/practice/join', {
        practiceID: practiceId,
        groupName: groupName
    })
}

export const getMyPractice = async () => {
    return instance.get('/practice/my')
}

export const renamePractice = async (practiceId: number, practiceName: string) => {
    return instance.put('/practice/rename', {
        'practiceID': practiceId,
        'practiceName': practiceName
    })
}
