import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { BsThreeDots } from "react-icons/bs"; // For the action button
import {FaSearch} from "react-icons/fa"
import './styles/issuesTable.css'
import { fetchIssues, deleteIssue } from "../service/api";

interface Issue {
  id: string;
  title: string;
  type: string;
  status: string;
  createdAt: string;
}

const statusColors: { [key: string]: string } = {
  SOLVED: "bg-[#DCFCE71A] text-[#4ADE80] font-bold",
  PENDING: "bg-[#FF3B30]/[0.08] text-[#FF3B30] font-normal",
  IN_PROGRES: "bg-[#FF9010]/[0.08] text-[#FF9010] font-normal",
  ACTIVE: "bg-[#DCFCE71A] text-[#4ADE80] font-normal"
};

const IssuesTable = () => {
  const queryClient = useQueryClient();
  
  
  const [selectedActionRow, setselectedActionRow] = useState<string| null>(null);
  const [selectedIssues, setSelectedIssues] = useState<string []>([]);
  const [currentPage, setCurrentPage] = useState(1);

  //Fetching issues using React Query
  const { data: issuesData, error, isLoading } = useQuery('issues', fetchIssues);
  const issues = issuesData?.issues || [];
  const meta = issuesData?.meta || {};


  //one issue checkbox handler
  function checkboxHandler(e:any){
      let isSelected = e.target.checked;
      let value = e.target.value;

      if( isSelected ){
        setSelectedIssues( [...selectedIssues, value ] )
      }else{
        setSelectedIssues((prevData)=>{
          return prevData.filter((id)=>{
            return id!==value
          })
        })
      }
  }

  //all issues checkbox handler
	function checkAllHandler(){
		if( issues.length === selectedIssues.length ){
			setSelectedIssues( [] )
		}else{
			const postIds = issues.map((issue:any)=>{
				return issue.id
			})
			setSelectedIssues( postIds )
		}
	}

  //deleting issues
  const mutation = useMutation(deleteIssue, {
    onSuccess: () => {
      // Invalidate and refetch the issues after successful deletion
      queryClient.invalidateQueries('issues');
    },
  });

  const handleDelete = async () => {
    try {
      // Loop through selectedIssues and delete them one by one
      await Promise.all(selectedIssues.map(issueId => mutation.mutateAsync(issueId)));
      if(selectedActionRow && selectedIssues.length === 0){
        mutation.mutateAsync(selectedActionRow)
      }
      // Clear selected issues after successful deletion
      setSelectedIssues([]);
    } catch (error) {
      console.error("Failed to delete issues:", error);
    }
  };
  
  //pagination
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, meta.totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

 // Pagination state
 const totalIssues = meta.totalCount;
 const totalPages = Math.ceil(totalIssues / meta.pageSize);

 if (isLoading) return <div>Loading...</div>;
 if (error) return <div>Error fetching issues: {'error'}</div>;

  return (    
    <div id="issues-table" className="border border-[#FFFFFF1A] rounded-2xl flex flex-col gap-5 bg-[#F8F6FF]/[0.04]">

        {/* table header */}
        <div className="pt-4 px-4 flex items-center justify-between">
        
            {/* table-left-header */}
            <div className="flex gap-2.5 items-center">
                <div id="search box" className='px-3 py-3 w-80 text-sm flex flex-row items-center content-center border border-white border-opacity-15 rounded-[0.25rem] bg-[#131429]'>
                    <FaSearch id="search-icon" className='w-4 text-[#71717A] mr-2' />
                    <input type="text" placeholder="Search" className='bg-transparent text-white h-fit'/>
                </div>

                <button id="status-btn" className="p-3 flex items-center gap-2 text-[#BEBBCE] text-sm font-semibold border border-white border-opacity-15 rounded-[0.25rem] bg-[#131429]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.01569 6.11962C2.28887 6.37329 2.71596 6.35747 2.96963 6.08429L4.72499 4.1939L4.72499 11.925C4.72499 12.2978 5.0272 12.6 5.39999 12.6C5.77278 12.6 6.07499 12.2978 6.07499 11.925V4.1939L7.83036 6.08429C8.08402 6.35747 8.51112 6.37329 8.7843 6.11962C9.05748 5.86596 9.07329 5.43886 8.81963 5.16568L5.89463 2.01568C5.76691 1.87814 5.58769 1.79999 5.39999 1.79999C5.21229 1.79999 5.03307 1.87814 4.90536 2.01568L1.98036 5.16568C1.72669 5.43886 1.74251 5.86596 2.01569 6.11962ZM9.21569 11.8804C8.94251 12.134 8.92669 12.5611 9.18036 12.8343L12.1054 15.9843C12.2331 16.1218 12.4123 16.2 12.6 16.2C12.7877 16.2 12.9669 16.1218 13.0946 15.9843L16.0196 12.8343C16.2733 12.5611 16.2575 12.134 15.9843 11.8804C15.7111 11.6267 15.284 11.6425 15.0304 11.9157L13.275 13.8061V6.07499C13.275 5.7022 12.9728 5.39999 12.6 5.39999C12.2272 5.39999 11.925 5.7022 11.925 6.07499V13.8061L10.1696 11.9157C9.91596 11.6425 9.48887 11.6267 9.21569 11.8804Z" fill="#BEBBCE"/></svg>
                    <span>Status</span>
                </button>

                <button id="type-btn" className="p-3 flex items-center gap-2 text-[#BEBBCE] text-sm font-semibold border border-white border-opacity-15 rounded-[0.25rem] bg-[#131429]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.01569 6.11962C2.28887 6.37329 2.71596 6.35747 2.96963 6.08429L4.72499 4.1939L4.72499 11.925C4.72499 12.2978 5.0272 12.6 5.39999 12.6C5.77278 12.6 6.07499 12.2978 6.07499 11.925V4.1939L7.83036 6.08429C8.08402 6.35747 8.51112 6.37329 8.7843 6.11962C9.05748 5.86596 9.07329 5.43886 8.81963 5.16568L5.89463 2.01568C5.76691 1.87814 5.58769 1.79999 5.39999 1.79999C5.21229 1.79999 5.03307 1.87814 4.90536 2.01568L1.98036 5.16568C1.72669 5.43886 1.74251 5.86596 2.01569 6.11962ZM9.21569 11.8804C8.94251 12.134 8.92669 12.5611 9.18036 12.8343L12.1054 15.9843C12.2331 16.1218 12.4123 16.2 12.6 16.2C12.7877 16.2 12.9669 16.1218 13.0946 15.9843L16.0196 12.8343C16.2733 12.5611 16.2575 12.134 15.9843 11.8804C15.7111 11.6267 15.284 11.6425 15.0304 11.9157L13.275 13.8061V6.07499C13.275 5.7022 12.9728 5.39999 12.6 5.39999C12.2272 5.39999 11.925 5.7022 11.925 6.07499V13.8061L10.1696 11.9157C9.91596 11.6425 9.48887 11.6267 9.21569 11.8804Z" fill="#BEBBCE"/></svg>
                    <span>Type</span>
                </button>
            </div>

            {/* table-right-header */}
            <button id="exort-btn" className="p-3 flex items-center gap-2 text-black text-sm font-semibold rounded-[0.25rem] bg-[#FF9010]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.67499 2.47499C9.67499 2.1022 9.37278 1.79999 8.99999 1.79999C8.6272 1.79999 8.32499 2.1022 8.32499 2.47499V10.2272L5.66572 7.41152C5.40976 7.14049 4.98254 7.12829 4.71152 7.38425C4.44049 7.64022 4.42829 8.06743 4.68426 8.33846L8.50926 12.3885C8.63677 12.5235 8.81428 12.6 8.99999 12.6C9.1857 12.6 9.36321 12.5235 9.49072 12.3885L13.3157 8.33846C13.5717 8.06743 13.5595 7.64022 13.2885 7.38425C13.0174 7.12829 12.5902 7.14049 12.3343 7.41152L9.67499 10.2272V2.47499Z" fill="#171717"/><path d="M3.14999 11.475C3.14999 11.1022 2.84778 10.8 2.47499 10.8C2.1022 10.8 1.79999 11.1022 1.79999 11.475V13.725C1.79999 15.0919 2.90808 16.2 4.27499 16.2H13.725C15.0919 16.2 16.2 15.0919 16.2 13.725V11.475C16.2 11.1022 15.8978 10.8 15.525 10.8C15.1522 10.8 14.85 11.1022 14.85 11.475V13.725C14.85 14.3463 14.3463 14.85 13.725 14.85H4.27499C3.65367 14.85 3.14999 14.3463 3.14999 13.725V11.475Z" fill="#171717"/></svg>
                <span>Export</span>
            </button>
        </div>

        {/* selection & delete seperator */}
        <div className="pl-4 flex items-center gap-3">
            <span className="text-white">1 selected</span>
            <svg width="1" height="34" viewBox="0 0 1 34" fill="none" xmlns="http://www.w3.org/2000/svg"><line opacity="0.3" x1="0.5" y1="2.18557e-08" x2="0.499999" y2="34" stroke="#9B99AD"/></svg>
            
            {/*deletion button */}
            <button className="flex items-center gap-2" onClick={handleDelete}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.87495 0.899994C6.50805 0.899994 5.39995 2.00809 5.39995 3.37499V3.77342C4.6842 3.84274 3.97437 3.93251 3.27107 4.04216C2.90273 4.09958 2.65068 4.44474 2.7081 4.81308C2.76553 5.18142 3.11068 5.43347 3.47902 5.37605L3.61215 5.35555L4.36949 14.8224C4.47239 16.1086 5.54624 17.1 6.83661 17.1H11.1631C12.4535 17.1 13.5273 16.1086 13.6302 14.8224L14.3876 5.35549L14.5211 5.37605C14.8894 5.43347 15.2346 5.18142 15.292 4.81308C15.3494 4.44474 15.0974 4.09958 14.729 4.04216C14.0257 3.9325 13.3158 3.84272 12.6 3.7734V3.37499C12.6 2.00809 11.4919 0.899994 10.125 0.899994H7.87495ZM9.00005 3.59999C9.75547 3.59999 10.5057 3.6227 11.25 3.66748V3.37499C11.25 2.75367 10.7463 2.24999 10.125 2.24999H7.87495C7.25363 2.24999 6.74995 2.75367 6.74995 3.37499V3.66749C7.49431 3.62271 8.24456 3.59999 9.00005 3.59999ZM7.79642 6.94502C7.77987 6.53113 7.43093 6.20904 7.01704 6.22559C6.60316 6.24215 6.28107 6.59109 6.29762 7.00497L6.56763 13.755C6.58419 14.1689 6.93313 14.491 7.34701 14.4744C7.76089 14.4578 8.08299 14.1089 8.06643 13.695L7.79642 6.94502ZM11.7024 7.00497C11.719 6.59109 11.3969 6.24215 10.983 6.22559C10.5691 6.20904 10.2202 6.53114 10.2036 6.94502L9.93363 13.695C9.91708 14.1089 10.2392 14.4578 10.6531 14.4744C11.0669 14.491 11.4159 14.1689 11.4324 13.755L11.7024 7.00497Z" fill="#BEBBCE"/></svg>
                <span className="text-white font-semibold">Delete</span>
            </button>

        </div>

    
      {/* Table */}
      <table className="min-w-full bg-transparent">
        {/* Table head title*/}
        <thead className="border-b border-white/[0.15]">
            <tr className="text-left">
                <td>
                    <input type="checkbox" onClick={checkAllHandler}/>
                </td>
                <th>Issue Title</th>
                <th>Issue Type</th>
                <th>Status</th>
                <th>Created at</th>
                <th align='center'>Action</th>
            </tr>
        </thead>

        {/* Table body*/}
        <tbody className="text-gray-600">
          {issues.map((issue:any) => (
            <tr key={issue.id} className="hover:bg-[#FFFFFF1F] cursor-pointer">
              <td>
                <input type="checkbox" checked={ selectedIssues.includes( issue.id ) } value={issue.id} onChange={checkboxHandler}/>
              </td>
              <td className="issue-title">
                <span className="td-title">{issue.title}</span>
                <p className="td-desc text-sm font-normal">test description</p>
              </td>
              <td className="p-4 text-base font-normal text-white">{issue.type}</td>
              <td>
                <span
                  className={`px-1.5 py-1 rounded-lg text-sm ${statusColors[issue.status]}`}
                >
                  {issue.status}
                </span>
              </td>
              <td className="text-white text-sm font-normal">{issue.createdAt.substring(0,10)}</td>
              <td className="relative" align="center">
                <button
                    className="p-2.5 rounded-[0.25rem] focus:bg-[#0E0F2E] focus:border-2 focus:border-[#FF9010]" 
                    onClick={() => setselectedActionRow(selectedActionRow === issue.id ? null : issue.id)}
                >
                <BsThreeDots className="fill-white"/>
                </button>
                {selectedActionRow === issue.id && (
                  <div className="absolute right-0 mt-1 w-40 bg-[#0E0F2E] border border-[#FFFFFF1A] text-white rounded-lg shadow-xl py-1 z-10">
                    <button className="block w-full px-4 py-2 text-left font-bold text-sm hover:bg-gray-700">View request</button>
                    <button className="block w-full px-4 py-2 text-left font-bold text-sm hover:bg-gray-700">Edit Status</button>
                    <button onClick={handleDelete} className="block w-full px-4 py-2 text-left font-bold text-sm hover:bg-gray-700">Delete</button>
                  </div>
                )}
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center p-4">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IssuesTable;
