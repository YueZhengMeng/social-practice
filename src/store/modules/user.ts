export interface User {
    username: string,
    role: string,
}

const user = {
    namespaced: true,
    state: (): User => ({
        username: '',
        role: '',
    }),
    getters: {
        valid(state: User): boolean {
            return state.role !== ''
        },
        privileged(state: User) {
            return state.role === 'teacher' || state.role === 'admin'
        },
        // token(state: User): string {
        //     return state.token
        // }
        printableRole(state: User): string {
            if (state.role === 'admin') {
                return '管理员'
            } else if (state.role === 'student') {
                return '学生'
            } else if (state.role === 'teacher') {
                return '老师'
            }
            return ''
        }
    },
    mutations: {
        set(state: User, payload: User): void {
            state.username = payload.username
            state.role = payload.role
        },
        clear(state: User): void {
            state.username = ''
            state.role = ''
        }
    },
    actions: {

    }
}

export default user
