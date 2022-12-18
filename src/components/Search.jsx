import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Cari orang...' />
      </div>
      <div className="userChat">
        <img src="https://avatars.githubusercontent.com/u/52228231?v=4" alt="" />
        <div className="userChatInfo">
          <span>Fajar</span>
        </div>
      </div>
    </div>
  )
}

export default Search