/**
 * Created by Administrator on 2017/7/10.
 */
/**
 * Created by ke-qi on 2016/8/5.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

//分页字组件
class PageItem extends Component {
  constructor (props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e) {
    e.preventDefault();
    this.props.onPageClick(this.props.pageNum)
  }
  render () {
    return <a href='javascript:;' className={this.props.className} onClick={this.handleClick}>{this.props.pageNum}</a>
  }
}

class Page extends Component {
  constructor (props){
    super(props);
    this.state = {
      pageNum:1
    };
    this.handleEnterClick = this.handleEnterClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  componentWillUpdate (nextProps) {
    if(nextProps.count != this.props.count){
      this.setState({
        pageNum:1
      });
    }
  }
  handlePageClick (pageNum) {
    this.setState({
      pageNum:pageNum
    },function(){
      this.props.onClick(this.state.pageNum);
    });
  }
  handleNextClick (e) {
    e.preventDefault;
    this.setState({
      pageNum:this.state.pageNum+1
    },function(){
      this.props.onClick(this.state.pageNum);
    });
  }
  handlePrevClick (e) {
    e.preventDefault;
    this.setState({
      pageNum:this.state.pageNum-1
    },function () {
      this.props.onClick(this.state.pageNum);
    });
  }
  handleEnterClick (e) {
    e.preventDefault;
    if(parseInt(this.refs.pageInput.value<1) || parseInt(this.refs.pageInput.value)>parseInt(this.props.count)){
      alert('请输入正确页码');
    }else{
      this.setState({
        pageNum:parseInt(this.refs.pageInput.value)
      },function () {
        this.props.onClick(this.state.pageNum);
      });
    }
    //this.state.pageNum -=1;
  }
  render () {
    var items = [];
    if(this.props.count>1){
      if (this.state.pageNum != 1) {
        items.push(<a href='javascript:;' key='prev' className="page-prev" onClick={this.handlePrevClick}>prev</a>)
      }
      if (this.props.count > 7) {
        if (this.state.pageNum > 4 && this.state.pageNum < this.props.count - 3) {
          items.push(<PageItem key={1} pageNum={1} onPageClick={this.handlePageClick}/>);
          items.push(<a href='javascript:;' key='prev...'>...</a>);
          items.push(<PageItem key={this.state.pageNum-2} pageNum={this.state.pageNum-2}
          onPageClick={this.handlePageClick}/>);
          items.push(<PageItem key={this.state.pageNum-1} pageNum={this.state.pageNum-1}
          onPageClick={this.handlePageClick}/>);
          items.push(<PageItem key={this.state.pageNum} className='active' pageNum={this.state.pageNum}
          onPageClick={this.handlePageClick}/>);
          items.push(<PageItem key={this.state.pageNum+1} pageNum={this.state.pageNum+1}
          onPageClick={this.handlePageClick}/>);
          items.push(<PageItem key={this.state.pageNum+2} pageNum={this.state.pageNum+2}
          onPageClick={this.handlePageClick}/>);
          items.push(<a href='javascript:;' key='next...'>...</a>);
          items.push(<PageItem key={this.props.count} pageNum={this.props.count} onPageClick={this.handlePageClick}/>);
        }
        if (this.state.pageNum <= 4) {
          for (var i = 1; i <= 6; i++) {
            if (i == this.state.pageNum) {
              items.push(<PageItem key={i} className='active' pageNum={i} onPageClick={this.handlePageClick}/>);
            } else {
              items.push(<PageItem key={i} pageNum={i} onPageClick={this.handlePageClick}/>);
            }
          }
          items.push(<a href='javascript:;' key='next...'>...</a>);
          items.push(<PageItem key={this.props.count} pageNum={this.props.count} onPageClick={this.handlePageClick}/>);
        }
        if (this.state.pageNum >= this.props.count - 3) {
          items.push(<PageItem key={1} pageNum={1} onPageClick={this.handlePageClick}/>);
          items.push(<a href='javascript:;' key='prev...'>...</a>);
          for (var i = this.props.count - 5; i <= this.props.count; i++) {
            if (i == this.state.pageNum) {
              items.push(<PageItem key={i} className='active' pageNum={i} onPageClick={this.handlePageClick}/>);
            } else {
              items.push(<PageItem key={i} pageNum={i} onPageClick={this.handlePageClick}/>);
            }
          }
        }
      } else {
        for (var i = 1; i <= this.props.count; i++) {
          if (i == this.state.pageNum) {
            items.push(<PageItem key={i} className='active' pageNum={i} onPageClick={this.handlePageClick}/>);
          } else {
            items.push(<PageItem key={i} pageNum={i} onPageClick={this.handlePageClick}/>);
          }
        }
      }
      if (this.state.pageNum != this.props.count) {
        items.push(<a href='javascript:;' key='next' className="page-next" onClick={this.handleNextClick}>next</a>)
      }
      items.push(
      <div className='font-enter' key='font-enter'>
        <span >共{this.props.count}页</span>
      到第
      <input ref='pageInput' type='text' min='1' max={this.props.count} defaultValue={this.state.pageNum}/>
      页
      <a href='javascript:;' className='enter-button' onClick={this.handleEnterClick}>确定</a>
      </div>
    );
    }
    return <div className="rcj-page">
      {
        items
      }
      </div>
  }
}

ReactDOM.render(
  <Page count="10" onClick={handleClick} />,
  document.getElementById('container')
)
function handleClick (state) {
  alert('第'+state+'页')
}