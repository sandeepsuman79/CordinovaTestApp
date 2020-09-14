export const baseUrl = 'http://rep.projectdevelopment.co/api/V1/';

export function headers(token) {
    return {
        "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzZDcxY2FlNy1iMmIzLTQ1MGItZWRhOC0wOGQ3YjUwYzk5ODgiLCJlbWFpbCI6ImZoc2ZnZmdocy1sYWVub3dhQG1haWxpbmF0b3IuY29tIiwianRpIjoiYzEzYzg3ODQtMTMxMC00NzExLTk2YzctZTZmYjkzNjg2MDc5IiwiZXhwIjoxNTg0Njg5MDEyLCJpc3MiOiJodHRwOi8vcmVwLnByb2plY3RkZXZlbG9wbWVudC5jby8iLCJhdWQiOiJodHRwOi8vcmVwLnByb2plY3RkZXZlbG9wbWVudC5jby8ifQ.07261-o_ToHVijmylhm5srxvnfBiTcAq0MyIpDyfFlM'
        }
    }
}