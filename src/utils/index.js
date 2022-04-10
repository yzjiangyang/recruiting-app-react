export const getRedirectTo = (type, header) => {
    let path
    if (type === 'applicant') {
        path = '/applicant'
    } else {
        path = '/recruiter'
    }
    if (!header) {
        path += 'info'
    }

    return path
}