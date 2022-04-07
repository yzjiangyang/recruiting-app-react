export const getRedirectTo = (type, avatar) => {
    let path
    if (type === 'applicant') {
        path = '/applicant'
    } else {
        path = '/recruiter'
    }
    if (!avatar) {
        path += 'info'
    }

    return path
}