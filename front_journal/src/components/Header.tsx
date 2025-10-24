import React from 'react'

const Header: React.FC = () => {
  const headerStyle = {
    backgroundImage: "url('/journal_bg.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundColor: 'transparent'
  }
  return (
    <header className="py-4">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center mb-3" style={headerStyle}>
          <div className="m-4 m-lg-5"></div>
        </div>
        <form action="#" method="get" id="frmSrch">
          <div className="input-group">
            <div className="input-group-prepend" style={{marginRight: '10px'}}>
              <select id="type" name="type" className="form-control">
                <option value="">전체보기</option>
                <option value="t">제목</option>
                <option value="c">내용</option>
                <option value="w">작성자</option>
                <option value="tc">제목+내용</option>
                <option value="tcw">제목+내용+작성자</option>
              </select>
            </div>
            <input type="text" className="form-control" name="keyword" id="keyword" style={{borderRadius: '5px'}} />
            <div className="input-group-append" style={{marginLeft: '10px'}}>
              <button className="btn btn-outline-primary btnSrch">검색</button>
            </div>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header
