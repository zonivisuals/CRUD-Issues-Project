export const ISSUES_API = 'http://localhost:4444/api/v1';

//structure of the issue
interface IssueData {
    title: string
    description: string
    //status: string
    //type: string 
}

//fetch data
export const fetchIssues = async () => {
    const response = await fetch(`${ISSUES_API}/issues`);
    if (!response.ok) {
      throw new Error('Failed to fetch issues');
    }
    const data = await response.json()
    return data
}

//create an issue    //here we can't set the type for the issue ? api bug
export const createIssue = async (issueData : IssueData) => {
    const response = await fetch(`${ISSUES_API}/issues`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(issueData),
    });
    return response.json();
}

//update an issue
export const updateIssue = async (issueId : string, newIssueData : IssueData) => {
    const response = await fetch (`${ISSUES_API}/issues/${issueId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newIssueData)
    })
    return response.json()
}

//delete an issue
export const deleteIssue = async (issueId : string) => {
    const response = await fetch (`${ISSUES_API}/issues/${issueId}`,{
        method: 'DELETE',
    })
    if(!response.ok){
        throw new Error('Failed to delete the issue');
    }
}

//delete bulk issues
export const bulkDeleteIssue = async (issueIds: string[]) => {
    const response = await fetch(`${ISSUES_API}/bulk`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ issuesIds: [] }),
    });
  
    const responseData = await response.json()
  
    if (!response.ok) {
      throw new Error(`Failed to bulk delete the issues: ${responseData.message || response.statusText}`) //return an error msg if there is error else return http status text
    }
  
    return responseData;
  };
  
  
  


  

